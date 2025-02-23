class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount; // in js # is used to deny accesss of object outside the clasa
    return this.#balance;
  }
  getBalance() {
    return `${this.#balance}`; //you can only access it through class methods
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

// Abstraction
class coffeeMachine {
  start() {
    return `starting the machine..`;
  }
  brewCoffee() {
    return `brewing coffee`;
  }
  pressButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return msgOne + msgTwo;
  }
}
let myMachine = new coffeeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressButton());

// Polymorphism
class Bird {
  fly() {
    return `can fly`;
  }
}
class Sparrow extends Bird {
  fly() {
    return `can fly faster`;
  }
}
let bird = new Bird();
let sparrow = new Sparrow();
console.log(bird.fly());
console.log(sparrow.fly());

// Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
let Add = new Calculator();
console.log(Calculator.add(5, 6));
