let itemsp = [250, 645, 300, 900, 50];
let finalPrice = [];

for (let val of itemsp) {
  itemsp = val / 10;
  val = val - itemsp;
  finalPrice.push(val);
}
console.log(finalPrice);

let arr = [23, 45, 45, 46, 78];
let sum = 0;

for (let val of arr) {
  sum = sum + val;
}
console.log(sum);
