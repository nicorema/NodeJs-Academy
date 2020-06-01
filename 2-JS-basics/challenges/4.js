var john = {
  name: 'John Ramirez',
  mass: 70,
  height: 1.72,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
var mike = {
  name: 'Mike Halon',
  mass: 92,
  height: 1.87,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

if (john.calcBMI() > mike.calcBMI()) {
  console.log(john);
} else if (mike.BMI > john.BMI) {
  console.log(mike);
} else {
  console.log('draw');
}
