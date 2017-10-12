



// Write a program that reads the user input one line at a time.
// It would expect the user input to start with one of four mathematical
// symbols: + - * / followed by two numbers, separated by spaces.
// For example: + 4 2 . The program will perform the desired mathematical
// operation (addition, subtraction, multiplication or division) and log the result.
//  The program will display an explanatory message if:
// 1. the operation is invalid.
// 2. The operation is not followed by the expected two numbers (with spaces)
// For example, if the user enters: * 2 3 the program will log 6.

var readline = require('readline')


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function mathOperations(input) {
  var total = 1;
  var newArr = [];
  var symbols = ["+", "-", "*", "/"];
  var array = input.split(" ");
  var divs = [];
  if (symbols.indexOf(array[0]) === -1) {
    console.log("Please use valid mathematical operation and followed by spaces between numbers");
  }
  for (var i = 1; i < array.length; i += 1) {
    var number = Number(array[i]);
    if (array[0] === '+') {
        total = total + number;
    } else if (array[0] === "-") {
        total -= number;
    } else if (array[0] === "*") {
        total *= number;
    } else if (array[0] === "/") {
        newArr = array.slice(1);
        divs = newArr.reduce(function(acc, curr) {
          return acc / curr;
        });
    }
  }
  if (array[0] === "+") {
    return total -1;
  } else if (array[0] === "-") {
    return total - 1 + (array[1]*2);
  } else  if (array[0] === "/") {
    return divs;
  } else {
    return total;
  }
}

rl.on("line", function(input) {
  var math = mathOperations(input);
  console.log(math);
})
