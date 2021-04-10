/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/
const { employees, animals } = require('./data');
// const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];
  return ids.map((e) => animals.find((f) => f.id === e));
}
function animalsOlderThan(animal, age) {
  const theAnimal = animals.find(({ name }) => name === animal);
  return theAnimal.residents.every((resident) => resident.age >= age);
}
function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}
function createEmployee(personalInfo, associatedWith) {
  const myObj = { ...personalInfo, ...associatedWith };
  return myObj;
}

function isManager(ids) {
  return employees.some((manager) => manager.managers.includes(ids));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {

// }

function animalCount(species) {
  const empty = {};
  const theObject = animals.find((e) => species === e.name);
  animals.forEach((e) => {
    empty[e.name] = e.residents.length;
  });
  if (!species) return empty;
  return theObject.residents.length;
}
// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
