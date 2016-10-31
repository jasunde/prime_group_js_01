var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

// for (var i = 0; i < employees.length; i++) {
//   var employee = employees[i];
//   console.log(bonusArrayBuilder(employee));
// }

employees.forEach(function(employee) {
  console.log(bonusArrayBuilder(employee));
});

// Builds an array with [name, bonus percentage, total compensation, rounded total compensation]
function bonusArrayBuilder(employee) {
  [name, id, salary, rating] = employee;
  salary = parseInt(salary, 10);

  var bonusPercentage = bonusCalculator(id, salary, rating);
  var bonus = salary * bonusPercentage;
  var totalComp = salary + bonus;
  return [name, bonusPercentage, totalComp, Math.round(bonus)];
}

// Calculates an employees bonus
// String, String, Number -> Number
function bonusCalculator(id, salary, rating) {
  var bonusPercentage = 0;

  bonusPercentage += performanceBonus(rating);
  bonusPercentage += longevityBonus(id);
  bonusPercentage -= salaryDeduction(salary);
  bonusPercentage = bonusLimits(bonusPercentage);

  return bonusPercentage / 100;
}

// Bonus based on rating
function performanceBonus(rating) {
  switch(rating) {
    case 3:
      return 4;
    case 4:
      return 6;
    case 5:
      return 10;
    default:
      return 0;
  }
}

// Bonus based on employee longevity
function longevityBonus(id) {
  // Longer term employees have 4 digit IDs
  if(id.length === 4) {
    return 5;
  } else {
    return 0;
  }
}

// Bonus deduction based on salary limit
function salaryDeduction(salary) {
  if(salary > 65000) {
    return 1;
  } else {
    return 0;
  }
}

// Bonus cannot exceed 13% or be negative
function bonusLimits(bonusPercentage) {
  bonusPercentage = Math.min(bonusPercentage, 13);
  bonusPercentage = Math.max(bonusPercentage, 0);

  return bonusPercentage;
}
