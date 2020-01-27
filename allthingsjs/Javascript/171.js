class Person {
  constructor(name, age, greet = 'Hi'){
    this.name = name;
    this.age = age;
    this.greeting = greet;
  };
  getGreeting(){
    return `${this.greeting} ${this.name}! Welcome.`;
  };
};

let p1 = new Person('Maxwell',17,'Sup');
let p2 = new Person('Tyson',13);

class Employee extends Person {
  constructor(name, age, greet = 'Hey', salary){
    super(name,age,greet);
    this.salary = salary;
  };
  //overridding
  getGreeting(){
    return super.getGreeting() + " Don't forget to record your time.";
  };
  getSalary(){
    return this.salary;
  };
}

let e1 = new Employee('Leyson',40,'Hello',40000);