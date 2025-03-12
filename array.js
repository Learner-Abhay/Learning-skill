// function stReverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(stReverse("hello"));

let numArray = [2, 3, 4, 5, 6, 7, 9];

let max = numArray[0]; // Assume first number is max

for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i]; // Update max if we find a bigger number
  }
}

console.log(`Biggest number in array is ${max}`);
