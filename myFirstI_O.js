//fs links in the filesystem operations library
var fs = require('fs');

//Append the .toString() method directly onto the readFileSync function
//Remember, the first command line argument begins @ index 2

var text = fs.readFileSync(process.argv[2]).toString();
var elements = text.split("\n")

console.log(elements.length - 1);