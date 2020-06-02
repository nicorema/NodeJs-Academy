//Function constructor
// var Nico = {
//   name: 'Nico',
//   yearOfBirth: 1995,
//   job: 'UI Developer',
// };

// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Restrepo';

// var nico = new Person('Nico', 1995, 'UI Developer');
// var john = new Person('John', 1990, 'Designer');

// nico.calculateAge();
// console.log(nico,john);

//Object.create

// var personProto = {
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = '1990';
// john.job = 'Desginer';

// var nico = Object.create(personProto, {
//   name: { value: 'Nico' },
//   yearOfBirth: { value: 1995 },
//   job: { value: 'UI Developer' },
// });

// console.log(nico);
// nico.calculateAge();

//Primitives vs Objects

// var a = 23;
// var b = a;
// a = 46;

// var obj1 = {
//   name: 'Nico',
//   age: 25,
// };

// var obj2 = obj1;

// obj2.name = 'John';

// console.log(a, b);
// console.log(obj1, obj2);

// var age = 25;
// var obj = {
//   name: 'Nico',
//   city: 'Bogotá',
// };

// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age, obj);

//First Class Functions (As Arguments)

// var years = [1990, 1991, 1992, 1993];

// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }

// function calculateAge(yearOfBirth) {
//   return 2020 - yearOfBirth;
// }

// console.log(arrayCalc(years,calculateAge));

//First Class Functions (As Return)

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function (name) {
//       console.log(name, 'Design question');
//     };
//   } else if (job === 'teacher') {
//     return function (name) {
//       console.log(name, 'Teacher question');
//     };
//   } else {
//     return function (name) {
//       console.log(name, 'Unknown job');
//     };
//   }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Nico');

//IIFEE
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }

// //game();

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(1);

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })(1);

//Clousures

// function retirenment(retirenmentAge) {
//   var a = ' Years left until retirenment.';
//   return function yearOfBirth(yearOfBirth) {
//     var age = 2020 - yearOfBirth;
//     console.log(retirenmentAge - age + a);
//   };
// }

// colombiaRetirenment = retirenment(60);
// colombiaRetirenment(1995);

//Bind, Call and apply

// var nico = {
//   name: 'Nico',
//   age: 25,
//   job: 'Developer',
//   presentation: function (style, timeOfDay) {
//     if (style === 'formal') {
//       console.log('Good ' + timeOfDay);
//     } else if (style === 'friendly') {
//       console.log('Whatsupppp have a nice ' + timeOfDay);
//     }
//   },
// };

// var emily = {
//   name: 'emily',
//   age: 24,
//   job: 'Designer',
// };

// console.log('normal');
// nico.presentation('friendly','morning')
// console.log('call');
// nico.presentation.call(emily,'formal','afternoon')

// console.log('apply');
// nico.presentation.apply(emily,['formal','afternoon'])

// console.log('bind');
// var nicoFormal = nico.presentation.bind(this,'formal');
// nicoFormal('day');
// nicoFormal('night');