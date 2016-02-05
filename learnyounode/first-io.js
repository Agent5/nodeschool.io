var fs = require('fs');

var filePath = process.argv[2];

var fileBuffer = fs.readFileSync(filePath, 'utf8');

// var str = fileBuffer.toString();

var someArray = fileBuffer.split('\n');

var countArrayLength = someArray.length; 

var result = countArrayLength - 1;

console.log(result);