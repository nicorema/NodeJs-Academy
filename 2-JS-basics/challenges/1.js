var markMass = 50;
var johnMass = 70;
var markHeight = 1.7;
var johnHeight = 1.75;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log("Mark's Bmi is higer than Jhon's");
} else {
  console.log("John's Bmi is higer than Mark's");
}
console.log(markBMI, johnBMI);
