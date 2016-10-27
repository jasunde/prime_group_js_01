var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

for (var i = 0; i < employees.length; i++) {
  var employee = employees[i];
  console.log(bonusArrayBuilder(employee));
}

// Builds an array with [name, bonus percentage, total compensation, rounded total compensation]
function bonusArrayBuilder(employee) {
  [name, id, salary, rating] = employee;

  var bonusPercentage = bonusCalculator(id, salary, rating);
  return [name, bonusPercentage];
}

function bonusCalculator(id, salary, rating) {
  var bonusPercentage = 0;

  switch(rating) {
    case 3:
      bonusPercentage = 4;
      break;
    case 4:
      bonusPercentage = 6;
      break;
    case 5:
      bonusPercentage = 10;
      break;
  }

  if(id.length == 4) {
    bonusPercentage += 5;
  }

  if(bonusPercentage > 13) {
    bonusPercentage = 13;
  }

  if(bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  return bonusPercentage / 100;
}
