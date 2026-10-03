const fs = require('fs');
const path = require('path');
const { PDFDocument, PDFName } = require('pdf-lib');

async function mapPages() {
  const data = fs.readFileSync('VITTESA_Catalogue_Expanded_Curated_Grey_Pink_Blue_Clean.pdf');
  const pdfDoc = await PDFDocument.load(data);
  const pages = pdfDoc.getPages();
  
  const mapping = {};
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const resources = page.node.Resources();
    if (!resources) continue;
    const xObject = resources.lookup(PDFName.of('XObject'));
    if (!xObject) continue;
    const refs = [];
    const dict = xObject.dict || xObject;
    if (dict && typeof dict.entries === 'function') {
      for (const [key, ref] of dict.entries()) {
        const keyName = key.name || key.asString?.() || String(key);
        const refTag = ref.tag || (ref.objectNumber ? `${ref.objectNumber} ${ref.generationNumber} R` : String(ref));
        refs.push({ key: keyName, ref: refTag });
      }
    }
    mapping[`page_${i+1}`] = refs;
  }
  fs.writeFileSync('page_image_mapping.json', JSON.stringify(mapping, null, 2));
  console.log('Saved page_image_mapping.json');
}
mapPages().catch(console.error);
