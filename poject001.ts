let familySize = 2;
let plannedDistanceToDrive = 100;

function recommendedCar(familySize: number, plannedDistanceToDrive: number) {
  if (familySize <= 4 && plannedDistanceToDrive < 200) {
    return "Tesla";
  } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
    return "Toyota Camry";
  } else if (familySize > 4) {
    return "Minivan";
  } else {
    return "No suitable car found";
  }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive)); // "Tesla"

familySize = 4;
plannedDistanceToDrive = 250;
console.log(recommendedCar(familySize, plannedDistanceToDrive)); // "Toyota Camry"

familySize = 5;
plannedDistanceToDrive = 100;
console.log(recommendedCar(familySize, plannedDistanceToDrive)); // "Minivan"
