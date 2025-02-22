let car = {
  make: "toyota",
  model: "camry",
  year: 2024,
  start: function () {
    return `${this.make} car started in ${this.year}`;
  },
};
// console.log(car.start());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.make} car started in ${this.model}`;
  }
}
class Car extends Vehicle {
  drive() {
    return `${this.make}:this is an inheritance`;
  }
}

let myCar = new Car("toyota", "corolla");
console.log(myCar.start());
console.log(myCar.drive());
