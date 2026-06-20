
const person = {
  name: 'Eve',
  sayName: function(greeting) {
    console.log(greeting, this.name);
  }
};

person.sayName.apply({ name: 'Dana' }, ['Hello']); // Hello Dana