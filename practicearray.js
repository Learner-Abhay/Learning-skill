let arr1 = [
  9, 9, 9, 9, 9, 99, 9, 9, 9, 9, 88888, 99, 9, 9, 9, 9, 9, 91, 2, 3, 4, 5, 0, 6,
  9, 6, 7, 7, 8,
];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr1[i] < 101) {
    newArr.push(arr1[i]);
  }
}
console.log(newArr);

let arr = [45, 56, 78, 34, 99];
let sum = 0;
for (let val of arr) {
  sum += val;
}
let avg = sum / arr.length;
console.log(avg);

let itemsp = [250, 645, 300, 900, 50];
let finalPrice = [];

for (let val of itemsp) {
  itemsp = val / 10;
  val = val - itemsp;
  finalPrice.push(val);
}
console.log(finalPrice);
