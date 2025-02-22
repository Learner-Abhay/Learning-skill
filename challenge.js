class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  displayInfo() {
    return `${this.brand} of model ${this.model} was made in ${this.year}`;
  }
}
let newCar = new Car("BMW", "X3", 2015);
console.log(newCar.displayInfo());
