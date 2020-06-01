var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;

console.log(johnAverage, mikeAverage);
if (johnAverage > mikeAverage && johnAverage > maryAverage) {
  console.log('John Wins ' + johnAverage);
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
  console.log('Mike Wins ' + mikeAverage);
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
  console.log('Mary Wins ' + maryAverage);
} else {
  console.log('draw');
}
