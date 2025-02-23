class Employee {
    #salary;
  constructor(name, salary) {
    if(salary<0){
        throw new Error("salary cannot be negative");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `you are not allowed to see`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("invalid salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("alice", 20000);
console.log(emp._salary);
emp.salary=-40000
