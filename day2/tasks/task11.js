class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(`${this.constructor.name} driving: ${this.make} ${this.model}`);
  }
}

class Bike extends Vehicle {
  constructor(make, model, type = 'road') {
    super(make, model);
    this.type = type;
  }
  // override drive and call parent method with super()
  drive() {
    super.drive();
    console.log(`${this.constructor.name} pedaling: ${this.make} ${this.model} (${this.type})`);
  }
}

// demo
const v = new Vehicle('Toyota', 'Corolla');
const b = new Bike('Giant', 'Escape', 'mountain');
v.drive();
b.drive();

// Student and Programmer
class Student {
  constructor(name, marks = []) {
    this.name = name;
    this.marks = marks;
  }
  average() {
    const sum = this.marks.reduce((s, m) => s + m, 0);
    return this.marks.length ? sum / this.marks.length : 0;
  }
}

class Programmer extends Student {
  constructor(name, marks = [], language = 'JavaScript') {
    super(name, marks); // call parent constructor
    this.language = language;
  }
  // call parent method using super()
  report() {
    console.log(`${this.name} programs in ${this.language}. Average marks: ${super.average()}`);
  }
}

const prog = new Programmer('Dev', [90, 80, 85], 'TypeScript');
prog.report();

// Multiple child classes
class Car extends Vehicle {
  drive() {
    console.log(`${this.constructor.name} driving smoothly: ${this.make} ${this.model}`);
  }
}

class Truck extends Vehicle {
  drive() {
    console.log(`${this.constructor.name} hauling heavy load: ${this.make} ${this.model}`);
  }
}

class Undergraduate extends Student {}

class Graduate extends Student {
  average() {
    console.log('Graduate average calculation...');
    return super.average();
  }
  thesis() {
    console.log(`${this.name} is writing their thesis`);
  }
}

// demo multiple children
const car = new Car('Honda', 'Civic');
const truck = new Truck('Volvo', 'FH');
car.drive();
truck.drive();
const ug = new Undergraduate('Alice', [70, 75]);
const grad = new Graduate('Bob', [88, 92]);
console.log(ug.name, 'avg', ug.average());
console.log(grad.name, 'avg', grad.average());
grad.thesis();