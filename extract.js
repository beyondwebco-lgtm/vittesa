const fs = require('fs');
const path = require('path');
const { PDFDocument, PDFName, PDFRawStream } = require('pdf-lib');
const zlib = require('zlib');

function decodeAscii85(input) {
  // strip whitespace and delimiters <~ ~>
  let str = input.toString('binary').replace(/\s+/g, '');
  if (str.startsWith('<~')) str = str.substring(2);
  if (str.endsWith('~>')) str = str.substring(0, str.length - 2);

  const out = [];
  let tuple = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c === 122 && count === 0) { // 'z' represents 4 zero bytes
      out.push(0, 0, 0, 0);
      continue;
    }
    if (c < 33 || c > 117) continue; // ignore non-ascii85 chars

    tuple = tuple * 85 + (c - 33);
    count++;

    if (count === 5) {
      out.push((tuple >> 24) & 0xff);
      out.push((tuple >> 16) & 0xff);
      out.push((tuple >> 8) & 0xff);
      out.push(tuple & 0xff);
      tuple = 0;
      count = 0;
    }
  }

  if (count > 0) {
    const padding = 5 - count;
    for (let i = 0; i < padding; i++) {
      tuple = tuple * 85 + 84; // pad with 'u' (84)
    }
    for (let i = 0; i < count - 1; i++) {
      out.push((tuple >> (24 - i * 8)) & 0xff);
    }
  }

  return Buffer.from(out);
}

async function extract() {
  const data = fs.readFileSync('VITTESA_Catalogue_Expanded_Curated_Grey_Pink_Blue_Clean.pdf');
  const pdfDoc = await PDFDocument.load(data);
  const outDir = path.join(__dirname, 'public', 'extracted');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const context = pdfDoc.context;
  let savedCount = 0;

  for (const [ref, obj] of context.enumerateIndirectObjects()) {
    if (obj instanceof PDFRawStream) {
      const dict = obj.dict;
      const subtype = dict.lookup(PDFName.of('Subtype'));
      if (subtype && (subtype.asString?.() === '/Image' || subtype.name === 'Image')) {
        const filter = dict.lookup(PDFName.of('Filter'));
        let filterStr = '';
        let filters = [];
        if (filter) {
          if (Array.isArray(filter.array)) {
            filters = filter.array.map(f => f.name || f.asString?.() || String(f));
          } else {
            filters = [filter.name || filter.asString?.() || String(filter)];
          }
        }
        filterStr = filters.join(',');

        let width = 'unknown';
        let height = 'unknown';
        try {
          const wObj = dict.lookup(PDFName.of('Width'));
          const hObj = dict.lookup(PDFName.of('Height'));
          width = wObj?.asNumber ? wObj.asNumber() : (wObj?.number ?? 'unknown');
          height = hObj?.asNumber ? hObj.asNumber() : (hObj?.number ?? 'unknown');
        } catch(e) {}

        let buffer = Buffer.from(obj.contents);

        // Apply decode filters in order if needed
        let isJpeg = false;
        let isPngLike = false;

        if (filters.includes('/ASCII85Decode') || filters.includes('ASCII85Decode')) {
          buffer = decodeAscii85(buffer);
        }

        if (filters.includes('/DCTDecode') || filters.includes('DCTDecode')) {
          isJpeg = true;
        } else if (filters.includes('/FlateDecode') || filters.includes('FlateDecode')) {
          try {
            buffer = zlib.inflateSync(buffer);
            isPngLike = true;
          } catch(e) {
            // might already be decompressed or failed
          }
        }

        const tagClean = ref.tag.replace(/[^a-zA-Z0-9]/g, '_');

        if (isJpeg) {
          const filename = path.join(outDir, `vittesa_img_${tagClean}_${width}x${height}.jpg`);
          fs.writeFileSync(filename, buffer);
          savedCount++;
          console.log(`Saved JPEG: ${filename} (${width}x${height})`);
        } else if (isPngLike && typeof width === 'number' && width > 50 && typeof height === 'number' && height > 50) {
          // If FlateDecode raw bitmap, save it
          const filename = path.join(outDir, `vittesa_raw_${tagClean}_${width}x${height}.bin`);
          fs.writeFileSync(filename, buffer);
          savedCount++;
          console.log(`Saved Flate Raw: ${filename} (${width}x${height})`);
        }
      }
    }
  }

  console.log(`Extracted total ${savedCount} assets to ${outDir}`);
}

extract().catch(console.error);
