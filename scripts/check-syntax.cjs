const fs = require('node:fs');
const path = require('node:path');
const acorn = require('acorn');
const root = path.resolve(__dirname, '..');
const workers = new Set(['cloudflare_worker.js', 'deno_worker.js', 'deno_apn.js']);
let checked = 0;
for (const file of fs.readdirSync(root).filter((name) => name.endsWith('.js'))) {
  acorn.parse(fs.readFileSync(path.join(root, file), 'utf8'), {
    ecmaVersion: workers.has(file) ? 'latest' : 5,
    sourceType: workers.has(file) ? 'module' : 'script'
  });
  checked++;
}
const html = fs.readFileSync(path.join(root, 'proxy.html'), 'utf8');
for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)) {
  acorn.parse(match[1], { ecmaVersion: 5 });
}
console.log(`Syntax OK: ${checked} JavaScript files and proxy.html; browser scripts use ES5.`);
