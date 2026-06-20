
const person = {
  name: 'Alice',
  sayName: function() {
    console.log('sayName -> this.name:', this.name);
  }
};

const detached = person.sayName;
detached(); // undefined in strict mode or global in non-strict

const bound = person.sayName.bind(person);
bound(); // Alice