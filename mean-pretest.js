// 1.)
var myObject = {
	firstName: "Joshawa",
	lastName: "Roberts",
	fullName: function() { 'use strict';
		return this.lastName + ', ' + this.firstName;
	}
};
console.log(myObject.fullName());

// 2.)
var countStart = 1;
var countEnd = 15;

var arr = [];

while(countStart < countEnd+1){
  if (countStart % 2 === 0){
    arr.push(countStart++ + "*");
  } else {
    arr.push(countStart++);
  }
}
console.log(arr);

// 3.) Not quite there yet. Still need to figure out how to choose all vars defined in the object.
function person(choose) {
  var name = "Joshawa Roberts";
  var age = 23;
  var height = 74; //inches;
  var hometown = "Naperville, IL";
  
  var choice = '';
  switch(choose){
    case 'name':
      choice = name;
      break;
    case 'age':
      choice = age;
      break;
    case 'height':
      choice = height;
      break;
    case 'hometown':
      choice = hometown;
      break;
  }
  
  return choice;
}

console.log(person('age'));

