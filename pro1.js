let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i] + arr2[i]); // ✅ Element-wise sum
}
console.log(arr3);
