import fs from 'fs';
import path from 'path';

function getFiles(dir, exts) {
  let res = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', 'dist', '.git', 'documents'].includes(item.name)) continue;
    const p = path.join(dir, item.name);
    if (item.isDirectory()) res = res.concat(getFiles(p, exts));
    else if (exts.some(e => item.name.endsWith(e))) res.push(p);
  }
  return res;
}

const htmlFiles = getFiles('.', ['.html']);
const errors = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relFile = path.relative('.', file).replace(/\\/g, '/');

  const matches = [
    ...[...content.matchAll(/href=["']([^"']+)["']/g)].map(m => ({ attr: 'href', val: m[1] })),
    ...[...content.matchAll(/src=["']([^"']+)["']/g)].map(m => ({ attr: 'src', val: m[1] }))
  ];

  for (const { attr, val } of matches) {
    if (val.startsWith('http://') || val.startsWith('https://') || val.startsWith('mailto:') || val.startsWith('tel:') || val.startsWith('javascript:')) {
      continue;
    }

    if (val.startsWith('#')) {
      const anchor = val.slice(1);
      const anchorRegex = new RegExp(`id=["']${anchor}["']|name=["']${anchor}["']`);
      if (!anchorRegex.test(content)) {
        errors.push({ file: relFile, attr, val, reason: `Anchor #${anchor} not found in this file` });
      }
      continue;
    }

    let withoutQuery = val.split('?')[0].split('#')[0];
    if (withoutQuery.includes('${')) continue; // Skip template literals in inline templates
    let target = withoutQuery;

    if (target === '/' || target === '') {
      target = '/index.html';
    } else if (target.endsWith('/')) {
      target = target + 'index.html';
    }

    let cleanTarget = target.startsWith('/') ? target.slice(1) : path.join(path.dirname(relFile), target).replace(/\\/g, '/');

    const existsRoot = fs.existsSync(cleanTarget);
    const existsPublic = fs.existsSync(path.join('public', cleanTarget));

    if (!existsRoot && !existsPublic) {
      errors.push({ file: relFile, attr, val, reason: `File not found: ${cleanTarget}` });
    }
  }
}

if (errors.length === 0) {
  console.log('✓ All links and media references across all HTML files are 100% valid!');
} else {
  console.error('Validation errors found:', JSON.stringify(errors, null, 2));
  process.exit(1);
}
