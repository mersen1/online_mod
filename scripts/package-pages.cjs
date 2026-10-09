const fs = require('node:fs');
const path = require('node:path');
const { build } = require('./build.cjs');
const root = path.resolve(__dirname, '..');
if (fs.readFileSync(path.join(root, 'online_mod.js'), 'utf8').replace(/\r\n/g, '\n') !== build()) {
  throw new Error('Build is out of date; run pnpm build before packaging.');
}
const target = path.join(root, 'dist');
fs.mkdirSync(target, { recursive: true });
for (const name of fs.readdirSync(root).filter((name) => /\.(?:js|html)$/.test(name))) {
  fs.copyFileSync(path.join(root, name), path.join(target, name));
}
fs.writeFileSync(path.join(target, '.nojekyll'), '');
console.log('Packaged static files in dist/.');
