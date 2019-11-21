let number = require("readline-sync").questionInt("What is your number? ")

let converters = require("./converter")

console.log(number + " in binary is " + converters.convertToBinary(number))
console.log(number + " in hexadecimal is " + converters.convertToHexa(number))