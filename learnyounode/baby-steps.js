console.log(process.argv);

var argumentLength = process.argv.length - 2;

console.log("Argument length = " + argumentLength);

var sumBit = 0;

for (i = 0; i < argumentLength; i++) {
  var j = i + 2;
  sumBit += +process.argv[j];
}  

console.log(sumBit);