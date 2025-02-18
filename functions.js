function greet(name) {
  console.log(`hello ${name}`);
}
greet("John");

function makeTea(typeOftea) {
  return `Making ${typeOftea}`;
}
let orderTea = makeTea("lemon tea");
console.log(orderTea);

function teaOrder(teaType) {
  function confirmOrder() {
    console.log("order confirmed");
  }
  confirmOrder();
  return `Your tea is ${teaType}`;
}
let orderPlaced = teaOrder("Lemon tea");
console.log(orderPlaced);

let calculateTotal = (price, quantity) => {
  return price * quantity;
};
let total = calculateTotal(5, 6);
console.log(total);

function makeTea(typeOftea) {
  return `maketea:${typeOftea}`;
}

function processOrder(teaFunction) {
  return teaFunction("earl grey");
}

let order = processOrder(makeTea);
console.log(order);

function createTeanMaker() {
  return function (teaType) {
    return `making ${teaType}`;
  };
}
let TeaMaker = createTeanMaker();
console.log(TeaMaker("green tea"));
