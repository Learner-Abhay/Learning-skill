let teaName = ["kalli chai", "green tea", "chai", "mocha", "coffee"];
let selectedTeas = [];
for (let i = 0; i < teaName.length; i++) {
  if (teaName[i] == "chai") {
    break;
  } else {
    selectedTeas.push(teaName[i]);
  }
}
console.log(selectedTeas);

let cities=["New york","berlin","tokyo","paris","mumbai"];
let visitedCities=[];
for(let j=0;j<cities.length;j++){
    if(cities[j]=="paris"){
        continue;
    }
    visitedCities.push(cities[j]);
}
console.log(visitedCities);

let number = [1, 2, 3, 4, 5];
let smallNumber = [];

for (const x of number) {
  if (x === 4) {
    break;
  }
  smallNumber.push(x);
}
console.log(smallNumber);

let Names = ["kalli chai", "green tea", "chai", "herbal tea","mocha", "coffee"];
let selectName=[];

for (const teas of Names) {
    if(teas==="herbal tea"){
        continue;
    }
    selectName.push(teas)
}
console.log(selectName);

