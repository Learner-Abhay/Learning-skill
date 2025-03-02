let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i] + " is even");
  } else {
    console.log(num[i] + " is odd");
  }
}
let sum = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
