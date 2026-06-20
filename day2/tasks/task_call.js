// task_call.js
// 8) Use .call() to borrow method
const person = {
  name: 'Eve',
  sayName: function() {
    console.log('sayName ->', this.name);
  }
};

const other = { name: 'Charlie' };
person.sayName.call(other); // Charlie