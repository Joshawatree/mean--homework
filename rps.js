var ask = require('readline-sync');

// get the user input
var line = ask.question('rock, paper, or scissors? ');

var user_choice = '';
if (line.length) {
	user_choice = line.substr(0, 1);
	// or
	user_choice = line[0];
}
user_choice = user_choice.toLowerCase();

// convert the user input to a number
// rock		->	0
// paper	->	1
// scissors	->	2
var convert_string_to_number = 'rps';
user_choice = convert_string_to_number.indexOf(user_choice);

// determine the computer's choice
var random = Math.random();
var computer_choice = Math.floor(random * 3);

// convert the computer's choice to a string
var convert_number_to_string = ['rock', 'paper', 'scissors'];
var computer_string = convert_number_to_string[computer_choice];

// check who wins and tell the user
if (user_choice - computer_choice === 1 || computer_choice - user_choice === 2) {
	// user wins
	console.log('You win! The computer chose ' + computer_string);
} else if (user_choice === computer_choice) {
	// tie
	console.log('It was a tie');
} else {
	// computer wins
	console.log('Computer wins by choosing ' + computer_string);
}