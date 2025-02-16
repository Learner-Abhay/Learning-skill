let sum = 0;
let i = 0;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);

let countdown = [];
let j = 5;
while (j >= 0) {
  countdown.push(j);
  j--;
}
console.log(countdown);



let total=0;
let k=1;
do {
    total =total+k;
    k++;
} while (k<=3);
console.log(total);

let multi=[];
let multinum=[2,3,4]
for(let l=0;l<multinum.length;l++){
    takenumber=multinum[l]*2;
    multi.push(takenumber);
}
console.log(multi);

let citylist=[];
let cities=["dubai","london","tokyo","mumbai"];
for(let m=0;m<cities.length;m++){
    citylist.push(cities);
}
console.log(cities);