const Person = {
  name: "hitesh",
  greet() {
    console.log("hello name is ", this.name);
  },
};
Person.greet();

const Newperson = Person.greet;
Newperson();

const New_Person = Person.greet.bind({ name: "John" });
New_Person();
