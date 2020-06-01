var johnTips = {
  bills: [124, 48, 268, 180],
  initAccount: function () {
    for (var i = 0; i < this.bills.length; i++) {
      this.tips.push(this.tipCalculator(this.bills[i]));
      this.totalBills.push(this.bills[i] + this.tips[i]);
    }
  },
  tipCalculator: function (bill) {
    var tipPercetage;
    if (bill < 50) {
      tipPercetage = 0.2;
    } else if (bill >= 50 && bill < 200) {
      tipPercetage = 0.15;
    } else {
      tipPercetage = 0.1;
    }
    return bill * tipPercetage;
  },
  tips: [],
  totalBills: [],
};

var markTips = {
  bills: [77, 375, 110, 45],
  initAccount: function () {
    for (var i = 0; i < this.bills.length; i++) {
      this.tips.push(this.tipCalculator(this.bills[i]));
      this.totalBills.push(this.bills[i] + this.tips[i]);
    }
  },
  tipCalculator: function (bill) {
    var tipPercetage;
    if (bill < 100) {
      tipPercetage = 0.2;
    } else if (bill >= 100 && bill < 300) {
      tipPercetage = 0.1;
    } else {
      tipPercetage = 0.25;
    }
    return bill * tipPercetage;
  },
  tips: [],
  totalBills: [],
};

function calculateAverage(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

johnTips.initAccount();
console.log(johnTips);

markTips.initAccount();
console.log(markTips);

console.log(calculateAverage(johnTips.tips));
console.log(calculateAverage(markTips.tips));
