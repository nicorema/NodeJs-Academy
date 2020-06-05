//Var Let & Const
// var name5 = 'Mathew Hill';
// var age5 = 23;
// name5 = 'Jane Hill';
// console.log(name5);

// const name6 = 'Jane Smith';
// let age6 = 23;
// //name6 = 'Jane Miller';
// console.log(name6);

// function driverLicence5(passedTest) {
//   if (passedTest) {
//     console.log(passed);
//     var passed = 'Yey';
//   }
//   console.log(passed);
// }

// function driverLicence6(passedTest) {
//   let passed;
//   if (passedTest) {
//     passed = 'Yey';
//   }
//   console.log(passed);
// }

// driverLicence5(true);
// driverLicence6(true);

// let i = 23;
// for(let i = 0; i<5 ; i++){
//   console.log(i);
// }
// console.log(i);

//Blocks and IIFES
// {
//   const a = 1;
//   let b = 2;
// }

// (function(){
//   var c = 3;
// })();

//Strings
// let firstName = 'Nico';
// let lastName = 'Restrepo';
// const yearOfBirth = 1995;

// function calcYear(year) {
//   return 2020 - year;
// }

// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.Today, he is ${calcYear(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('n'));
// console.log(n.endsWith('o'));
// console.log(n.includes('co'));
// console.log(firstName.repeat(5));

//Arrow Functions
// const years = [1990, 1965, 1982, 1937];

// var ages5 = years.map(function (current) {
//   return 2020 - current;
// });
// console.log(ages5);

// let ages6 = years.map(current => 2020 - current);
// console.log(ages6);

// ages6 = years.map(
//   (current, index) => `Age element ${index + 1}: ${2020 - current}`
// );
// console.log(ages6);

// ages6 = years.map((current, index) => {
//   const now = new Date().getFullYear();
//   const age = now - current;
//   return `Age element ${index + 1}: ${age}`;
// });

// console.log(ages6);

//Arrow Functions this
// var box5 = {
//   color:'green',
//   position:1,
//   clickMe: function(){
//     var self = this;
//     document.querySelector('.green').addEventListener('click', function(){
//       var str = 'This is Box number ' + self.position + ' and it is '+ self.color;
//       console.log(str);
//     })
//   }
// }

// box5.clickMe();

// const box6 = {
//   color:'green',
//   position:1,
//   clickMe: function(){
//     document.querySelector('.green').addEventListener('click', () => {
//       const str = 'This is Box number ' + this.position + ' and it is '+ this.color;
//       console.log(str);
//     })
//   }
// }

// box6.clickMe();

// //Destructuring
// var john = ['John',26]
// var name = john[0];
// var age = john[1];

// const john = ['John',26];
// const [name,year] = john;
// console.log(name,year)

// const obj = {
//   firstName:'Nico',
//   lastName:'Restrepo'
// }

// const {firstName: oname, lastName: olname} = obj;
// console.log(oname,olname)

//Arrays
// const boxes = document.querySelectorAll('.box');

// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerBlue');

// for(const cur of boxes){
// }
//Spread

// const ages = [16,24,12,21];

// function sumAges(a,b,c,d){
//   return a+b+c+d;
// }

// console.log(sumAges(...ages))

//Rest parameters
// function sumAges(...ages){
//   return ages.reduce((prev,curr)=>prev+curr);
// }

// console.log(sumAges(21,12,75,84,52));

//Default parameters

// function print(a = 'Nicolas',b='Web UI',c=24){
//   console.log(`${a} ${b} ${c}`)
// }

// print(undefined,undefined,100)

//Maps

// const question = new Map();
// question.set('question','Whast is a clousure in Js');
// question.set(1,'A');
// question.set(2,'B');
// question.set(3,'C');
// question.set(4,'D');
// question.set('correct',3);
// question.set(true,'Great');
// question.set(false,'wrong');
// question.delete(4);
// console.log(question);

//clases

class Person6 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }

  static greeting() {
    console.log('Jelouda');
  }
}

class Athtlete extends Person6 {
  constructor(name, medals) {
    super(name);
    this.medals = medals;
  }
}

new Athtlete('mick',6).getName();
