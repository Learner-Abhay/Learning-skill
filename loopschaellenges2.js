let citiesPopulation = {
  "New York": 1111111,
  Tokyo: 2222222,
  Paris: 3333333,
  Mumbai: 4444444,
  Berlin: 5555555,
};

let cityPopulation = {};

for (const pop in citiesPopulation) {
  if (pop == "Paris") {
    break;
  }
  cityPopulation[pop] = citiesPopulation[pop];
}
console.log(cityPopulation);

let citiesPopulation = {
  "New York": 1111111,
  Tokyo: 2222222,
  Paris: 3333333,
  Mumbai: 4444444,
  Berlin: 5555555,
};
let largeCities = {};

for (const city in citiesPopulation) {
  if (citiesPopulation[city] < 3000000) {
    continue;
  }
  largeCities[city] = citiesPopulation[city];
}
console.log(largeCities);

let teaName = ["kalli chai", "green tea", "chai", "mocha", "coffee"];

let availableTeas = [];
teaName.forEach(function (tea) {
  if (tea == "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

let cities = ["New york", "berlin", "tokyo", "paris", "mumbai"];
let travalCities = [];
cities.forEach((city) => {
  if (city == "tokyo") {
    return;
  }
  travalCities.push(city);
});
console.log(travalCities);

let number = [2, 5, 7, 9];
let doubleNumbers = [];
for (let i = 0; i < number.length; i++) {
  if (number[i] === 7) {
    continue;
  }
  doubleNumbers.push(number[i] * 2);
}
console.log(doubleNumbers);

let teaName = ["chai", "green tea", "latte chaiss", "mocha", "coffee"];
let shortTeas = [];

for (const tea of teaName) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
