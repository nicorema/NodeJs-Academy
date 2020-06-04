var budgetController = (function () {
  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calculatePercentage = function (totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
    console.log(this.percentage);
  };

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  };

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    total: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (current) {
      sum += +current.value;
    });

    data.total[type] = sum;
  };

  return {
    addItem: function (type, description, value) {
      var newItem;
      var id = data.allItems[type][data.allItems.length - 1]
        ? data.allItems[type][data.allItems.length - 1].id + 1
        : 0;
      if (type === 'inc') {
        newItem = new Income(id, description, value);
      } else if (type === 'exp') {
        newItem = new Expense(id, description, value);
      }
      data.allItems[type].push(newItem);
      data.total[type] += +value;
      return newItem;
    },
    calculateBudget: function () {
      calculateTotal('exp');
      calculateTotal('inc');

      data.budget = data.total.inc - data.total.exp;

      if (data.total.inc > 0) {
        data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function () {
      data.allItems.exp.forEach(function (current) {
        current.calculatePercentage(data.total.inc);
      });
    },

    getPercentages: function () {
      return data.allItems.exp.map(function (current) {
        return current.getPercentage();
      });
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.total.inc,
        totalExp: data.total.exp,
        percentage: data.percentage,
      };
    },
    deleteItem: function (type, id) {
      var ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      var index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
  };
})();

var UIController = (function () {
  var domStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensiveLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    dateLabel: '.budget__title--month',
  };
  var formatNumber = function (num, type) {
    num = Math.abs(num);
    num = num.toFixed(2);

    var numSplit = num.split('.');
    var int = numSplit[0];
    if (int.length > 3) {
      int = int.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    var dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  var nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getDomStrings: function () {
      return domStrings;
    },
    getInput: function () {
      return {
        type: document.querySelector(domStrings.inputType).value,
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value,
      };
    },
    addListItem: function (obj, type) {
      var html, newHtml, element;
      if (type === 'inc') {
        element = domStrings.incomeContainer;
        html = `<div class='item clearfix' id='inc-%id%'>
      <div class='item__description'>%descp%</div>
        <div class='right clearfix'>
          <div class='item__value'>%value%</div>
          <div class='item__delete'>
            <button class='item__delete--btn'>
              <i class='ion-ios-close-outline'></i>
            </button>
          </div>
        </div>
      </div>`;
      } else if (type === 'exp') {
        element = domStrings.expensesContainer;
        html = `<div class='item clearfix' id='exp-%id%'>
            <div class='item__description'>%descp%</div>
            <div class='right clearfix'>
              <div class='item__value'>%value%</div>
              <div class='item__percentage'></div>
              <div class='item__delete'>
                <button class='item__delete--btn'>
                  <i class='ion-ios-close-outline'></i>
                </button>
              </div>
            </div>
          </div>`;
      }
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%descp%', obj.description);
      newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    deleteListItem: function (selectorId) {
      var element = document.getElementById(selectorId);
      element.parentNode.removeChild(element);
    },
    clearFields: function () {
      var fields = document.querySelectorAll(
        domStrings.inputDescription + ', ' + domStrings.inputValue
      );
      var fieldsArr = Array.prototype.slice.apply(fields);
      fieldsArr.forEach(function (current) {
        current.value = '';
      });

      fieldsArr[0].focus();
    },

    displayBudget: function (obj) {
      document.querySelector(domStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(domStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(domStrings.expensiveLabel).textContent =
        obj.totalExp;

      if (obj.percentage > 0) {
        document.querySelector(domStrings.percentageLabel).textContent =
          obj.percentage + '%';
      } else {
        document.querySelector(domStrings.percentageLabel).textContent = '---';
      }
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(
        domStrings.expensesPercentageLabel
      );

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }
      });
    },

    displayMonth: function () {
      var now = new Date();
      var year = now.getFullYear();
      var months = [
        'January',
        'February',
        'March',
        'Abril',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      var month = months[now.getMonth()];
      document.querySelector(domStrings.dateLabel).textContent =
        month + ' ' + year;
    },

    changedType: function () {
      var fields = document.querySelectorAll(
        domStrings.inputType +
          ',' +
          domStrings.inputDescription +
          ',' +
          domStrings.inputValue
      );

      nodeListForEach(fields,function(current){
        current.classList.toggle('red-focus');
      })

      document.querySelector(domStrings.inputBtn).classList.toggle('red');;
    },
  };
})();

var controller = (function (budgetController, UIController) {
  var updateBudget = function () {
    budgetController.calculateBudget();
    var budget = budgetController.getBudget();
    UIController.displayBudget(budget);
  };

  var updatePercentages = function () {
    budgetController.calculatePercentages();
    var percentages = budgetController.getPercentages();
    UIController.displayPercentages(percentages);
  };

  var ctrlAddItem = function () {
    var input = UIController.getInput();
    if (input.description != '' && !isNaN(input.value) && input.value > 0) {
      var newItem = budgetController.addItem(
        input.type,
        input.description,
        input.value
      );
      UIController.addListItem(newItem, input.type);
      UIController.clearFields();
      updateBudget();
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
    var splitId, type, id;
    if (itemId) {
      splitId = itemId.split('-');
      type = splitId[0];
      id = +splitId[1];
      budgetController.deleteItem(type, id);
      UIController.deleteListItem(itemId);
      updateBudget();
      updatePercentages();
    }
  };

  var setupEventListeners = function () {
    var domStrings = UIController.getDomStrings();
    document
      .querySelector(domStrings.inputBtn)
      .addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(domStrings.container)
      .addEventListener('click', ctrlDeleteItem);

    document
      .querySelector(domStrings.inputType)
      .addEventListener('change', UIController.changedType);
  };

  return {
    init: function () {
      console.log('App Started');
      UIController.displayMonth();
      UIController.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0,
      });
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
