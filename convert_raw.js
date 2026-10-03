const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const dir = path.join(__dirname, 'public', 'extracted');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.bin'));

for (const f of files) {
  const match = f.match(/_(\d+)x(\d+)\.bin$/);
  if (!match) continue;
  const width = parseInt(match[1]);
  const height = parseInt(match[2]);
  const rawBuffer = fs.readFileSync(path.join(dir, f));

  if (rawBuffer.length === width * height * 3) {
    const png = new PNG({ width, height });
    for (let i = 0; i < width * height; i++) {
      png.data[i * 4] = rawBuffer[i * 3];       // R
      png.data[i * 4 + 1] = rawBuffer[i * 3 + 1]; // G
      png.data[i * 4 + 2] = rawBuffer[i * 3 + 2]; // B
      png.data[i * 4 + 3] = 255;                  // Alpha
    }
    const outName = f.replace('.bin', '.png');
    const outPath = path.join(dir, outName);
    fs.writeFileSync(outPath, PNG.sync.write(png));
    console.log(`Converted to PNG: ${outName}`);
  } else {
    console.log(`Size mismatch for ${f}: expected ${width*height*3}, got ${rawBuffer.length}`);
  }
}
console.log('Conversion complete!');
