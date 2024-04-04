const fs = require('fs');

const input = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(input);

const textOut = 'This is what we know about the avocado: $(textIn).\nCreated on $(Date.now)';
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!');