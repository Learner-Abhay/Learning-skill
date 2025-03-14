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
