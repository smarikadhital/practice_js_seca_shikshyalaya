
const person = {
  name: 'Alice',
  sayName: function() {
    console.log('sayName -> this.name:', this.name);
  }
};
person.sayName(); // Alice