///////////////////////////////////////
// Lecture: Hoisting
// calculateAge(1995);

// function calculateAge(year) {
//   console.log(2020 - year);
// }

// // Not work -> retirement(1995);

// var retirement = function (year) {
//   console.log(65 - (2020 - year));
// };

// let age = 23;
// console.log(age);

// function foo() {
//   let age = 65;
//   console.log(age);
// }

// foo();

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}


///////////////////////////////////////
// Lecture: The this keyword
*/

console.log(this);
calculateAge(1995);

function calculateAge(year) {
  console.log(this);
  console.log(2020 - year);
}

var obj = {
  name: 'Nico',
  getName: function () {
    console.log(this);
    inner.call(this);
    function inner() {
      console.log(this);
    }
  },
};

obj.getName();
