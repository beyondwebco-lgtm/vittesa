import fs from 'fs';

const files = [
  'index.html',
  'collections/index.html',
  'collections/olivera/index.html',
  'collections/olivera/product.html',
  'showroom.html'
];

const forbiddenRegexes = [
  /\blumera\b/i, /\bluméra\b/i,
  /\baveron\b/i, /\bavéron\b/i,
  /\bterra speckle\b/i, /\bterra-speckle\b/i,
  /\burbane grey\b/i, /\burbane-grey\b/i,
  /\bparadise pink\b/i, /\bparadise-pink\b/i,
  /\baqua blue\b/i, /\baqua-blue\b/i,
  /\bessential white\b/i, /\bessential-white\b/i,
  /\broké\b/i, /\broke\b/i
];

let foundIssues = false;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  forbiddenRegexes.forEach(regex => {
    if (regex.test(content)) {
      console.log(`WARNING: Found ${regex} in ${f}`);
      foundIssues = true;
    }
  });
});

if (!foundIssues) {
  console.log('SUCCESS: Zero references to other collections found in active HTML pages!');
}
