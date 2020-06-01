/****** Variables and data types ******/
/*
var firstName = 'Nicolás';
console.log(firstName);

var lastName = 'Smith';
console.log(lastName);

var age = 24;
console.log(24);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job)
*/

/****** Variables mutation and type coercion ******/
/*
var firstName = 'Nicolás';
var age = 24;
console.log(firstName + ' ' + age);

age = 'twenty four'
console.log(firstName + ' ' + age);
*/

/****** Basic operators ******/

/*
var now = 2020;
var ageNico = 24;
var nicoYearBorn = now - ageNico;

console.log(nicoYearBorn)
console.log(now * 2);
console.log(now + 2);
console.log(now / 2);


var ageSanti = 18;
var nicoOlder = ageNico > ageSanti;
console.log(nicoOlder);

console.log(typeof( nicoOlder));
*/

/****** Operator precedence ******/
/*
var now = 2018;
var yearNico = 1995;
var fullAge = 18;

var isFullAge = now - yearNico >= fullAge;
console.log(isFullAge);
*/

/****** If / else statements ******/
/*
var firstName = 'Nico';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)!');
}

var isMarried = true;

if (isMarried) {
  console.log(firstName + ' is married!');
} else {
  console.log(firstName + ' will hopefully marry soon :)!');
}
*/

/****** Boolean logic ******/
/*
var firstName = 'Nico';
var age = 25;

if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + ' is a man.');
}
*/
/****** The Ternary Operator and Switch Statements ******/
/*
var firstName = 'Nico';
var age = 15;

age >= 18
  ? console.log(firstName + ' drinks beer')
  : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : ' juice';

var job = 'mentor';

switch (job) {
  case 'teacher':
  case 'mentor':
    console.log(firstName + ' teachs');
    break;
  case 'developer':
    console.log(firstName + ' program');
    break;

  default:
    console.log(firstName + ' is a worker');
}
*/

/****** Truthy and Falsy values and equality operators ******/
/*
var height = 23;
if (height || height === 0) {
  console.log('variable defined');
} else {
  console.log('variable not defined');
}

if (height == '23') {
  console.log('the == operator does type coercion');
}
*/

/****** Functions ******/
/*

function calculateAge(birthYear) {
  return 2020 - birthYear;
}

var age = calculateAge(1995);
console.log(age);
*/

/****** Function Statements and expressions ******/
/*
function whatDoYouDo(job,firstName){

}

var whatDoYouDo = function(job,firstName){

}
*/

/****** Arrays ******/
/*
var names = ['Mark', 'Jane', 'John'];
var years = new Array(1990.1969,1940);

names[8] = 'Nico';

names.push('Migue')
names.unshift('Rambo')

names.pop();
names.shift();



console.log(names);
console.log(names.length);
console.log(names.indexOf('John'))
*/

/****** Objects and Properties ******/
/*
var nico = {
  firstName: 'Nico',
  lastName: 'Restrepo',
};

nico.age = 24;
console.log(nico);
*/

/****** Objects and Properties ******/
/*
var nico = {
  firstName: 'Nico',
  lastName: 'Restrepo',
  birthYear: 1995,
  calcAge: function(birthYear){
    this.age = 2020-this.birthYear;
  },
  
};

nico.calcAge();
console.log(nico);
*/

/****** Loops and Iteration ******/
/*
var names = ['Mark', 'Jane', 'John'];
for (var i = 0; i < 10; ++i) {
  console.log(names[i]);
}

var i = 0;
while(i< names.length){
  console.log(names[i]);
  i++;
}
*/
