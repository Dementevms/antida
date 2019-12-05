const path = require('path');
const fs = require('fs');

fs.readFile(__dirname + '/test.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  const result = data.replace(/\s+/g, ' ');
  fs.writeFile(__dirname + 'converted_test.txt', result, 'utf8', (err) => {
    if (err) {throw err;}
    console.log('The file has been saved!');
  });
});
