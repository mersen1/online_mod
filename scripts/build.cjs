const fs = require('node:fs');
const path = require('node:path');
const acorn = require('acorn');
const root = path.resolve(__dirname, '..');

function build() {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'src/manifest.json'), 'utf8'));
  const modules = manifest.files.map((file) => {
    const source = fs.readFileSync(path.join(root, 'src', file.path), 'utf8').replace(/\r\n/g, '\n');
    return source.replace(/^(?=.+)/gm, '    ') + file.after;
  });
  const bundle = '// Generated from src/ by scripts/build.cjs. Edit src/, then run pnpm build.\n' + manifest.intro + modules.join('') + manifest.outro;
  acorn.parse(bundle, { ecmaVersion: 5 });
  return bundle;
}

if (require.main === module) {
  const bundle = build();
  const target = path.join(root, 'online_mod.js');
  if (process.argv.includes('--check')) {
    if (fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n') !== bundle) {
      console.error('online_mod.js is out of date. Run pnpm build.');
      process.exitCode = 1;
    } else console.log('Bundle matches source modules.');
  } else {
    // Preserve the CRLF format of the upstream published bundle.
    fs.writeFileSync(target, bundle.replace(/\n/g, '\r\n'));
    console.log('Built online_mod.js (ES5).');
  }
}

module.exports = { build };
