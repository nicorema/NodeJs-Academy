var bills = [124, 48, 268];

function tipCalculator(bill) {
  var tipPercetage;
  if (bill < 50) {
    tipPercetage = 0.2;
  } else if (bill >= 50 && bill < 200) {
    tipPercetage = 0.15;
  } else {
    tipPercetage = 0.1;
  }
  return bill * tipPercetage;
}

var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];
var total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(tips, total);
