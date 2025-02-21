function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let newPerson = new Person("john", 28);
console.log(newPerson);

let myCar = new Car("toyota", "camry");
console.log(myCar);

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea.describe());

function Animal(species){
    this.species=species;
}

Animal.prototype.sound=function(){
    return `${this.species} makes a sound`;
}

let Dog=new Animal("Dog");
console.log(Dog.sound()); 