const fs = require('fs');

const files = fs.readdirSync('dist');

files.forEach(file => {
  const newName = file.replace('.html', '');
  fs.renameSync(`dist/${file}`, `dist/${newName}`);
});
