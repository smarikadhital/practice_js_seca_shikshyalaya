
export class Person {
  constructor(name) { this.name = name; }
  speak() { console.log('Person:', this.name); }
}

// quick demo when module is loaded
const demo = new Person('Class Export Demo');
demo.speak();