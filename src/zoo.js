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
const {
  employees,
  animals,
  hours,
  prices,
} = require('./data');
// const data = require('./data');

function animalsByIds(...ids) {
  if (!ids) return [];
  return ids.map((e) => animals.find((f) => f.id === e));
}

function animalsOlderThan(animal, age) {
  const theAnimal = animals.find(({
    name,
  }) => name === animal);
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
  const myObj = {
    ...personalInfo,
    ...associatedWith,
  };
  return myObj;
}

function isManager(ids) {
  return employees.some((manager) => manager.managers.includes(ids));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = [{
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }];

  obj.forEach((e) => employees.push(e));

  // console.log(employees);
}
// addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
//   [
//     '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//     'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//   ],
//   [
//     'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//     '210fcd23-aa7b-4975-91b7-0230ebb27b99',
//   ]);

function animalCount(species) {
  const empty = {};
  const theObject = animals.find((e) => species === e.name);
  animals.forEach((e) => {
    empty[e.name] = e.residents.length;
  });
  if (!species) return empty;
  return theObject.residents.length;
}

// 8. IMPLEMENTE A FUNÇÃO entryCalculator
// A partir da quantidade de visitantes e a faixa etária de cada um, esta função é responsável por retornar o preço total a ser cobrado

// Observações técnicas

// O parâmetro entrants recebe um objeto que contém as chaves Adult, Child e Senior, com suas respectivas quantidades de pessoas
// O que será avaliado

// Retorna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

function entryCalculator(entrants = 0) {
  if (!entrants) return 0;
  let a = 0;
  let b = 0;
  let c = 0;

  if (entrants.Adult) {
    a = entrants.Adult * 49.99;
  }
  if (entrants.Child) {
    b = entrants.Child * 20.99;
  }
  if (entrants.Senior) {
    c = entrants.Senior * 24.99;
  }
  return a + b + c;
}
// function animalMap(options) {
//   // seu código aqui
// }

function schedule(dayName) {
  const newObj = {};
  Object.keys(hours).forEach((item) => {
    if (item === 'Monday') {
      (newObj[item] = 'CLOSED');
    } else {
      newObj[item] = `Open from ${hours[item].open}am until ${hours[item].close % 12}pm`;
    }
  });
  if (!dayName) {
    return newObj;
  }
  return {
    [dayName]: newObj[dayName],
  };
}
// schedule();

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  Object.keys(prices).forEach((item) => {
    prices[item] += (prices[item] * percentage) / 100;
    prices[item] = Math.round(prices[item] * 100) / 100;
  });
}

// const empty = {};
// const theObject = animals.find((e) => species === e.name);
// animals.forEach((e) => {
//   empty[e.name] = e.residents.length;
// });
// if (!species) return empty;
// return theObject.residents.length;
// }

// function employeeCoverage(idOrName) {
//   if (!idOrName) {
//     employees.forEach((e) => {
//       // const names = `${e.firstName} ${e.lastName}`;
//       // const responsibleForIds = e.responsibleFor;
//       // const listaEmployeesName = `'${names}' : ['${responsibleForIds}']`;
//       // console.log(listaEmployeesName);
//       // responsibleForIds.forEach((id) => animals.forEach((animalName) => console.log(animalName.name)));
//     });
//   }
// }

// employeeCoverage();

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
