var ask = require('readline-sync');

// get the user input
var line = ask.question('>');

var num1 = 0;
var num2 = 0;
var operator = '';

// check what kind of operator was used
if (line.indexOf('+') > -1) {
	// addition
	operator = '+';
} else if (line.indexOf('-') > -1) {
	// subtraction
	operator = '-';
} else if (line.indexOf('*') > -1) {
	// multiplication
	operator = '*';
} else if (line.indexOf('/') > -1) {
	// division
	operator = '/';
} else if (line.indexOf('%') > -1) {
	// modulo
	operator = '%';
}

var position = line.indexOf(operator);

// get first number
num1 = parseFloat(line.substring(0, position).trim());

// get the second number
num2 = parseFloat(line.substring(position + 1).trim());

// do the operations and print the result
switch(operator) {
	case '+':
		console.log(num1 + num2);
		break;
	case '-':
		console.log(num1 - num2);
		break;
	case '*':
		console.log(num1 * num2);
		break;
	case '/':
		console.log(num1 / num2);
		break;
	case '%':
		console.log(num1 % num2);
		break;
	default:
		console.log('invalid input');
}