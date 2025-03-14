let numbers = [2, 3, 54, 6, 76, 44, 5];
let value = 0;

for (let val of numbers) {
  // value = val;
  if (val > value) {
    value = val;
  }
}
console.log(value);
