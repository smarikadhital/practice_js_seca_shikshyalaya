// task_click_handler.js
// 4) Use `this` inside a click handler (browser)
const btn = document.createElement('button');
btn.textContent = 'Click me (handler demos)';
document.body.appendChild(btn);

btn.addEventListener('click', function() {
  console.log('normal handler this === element:', this);
});

const person = {
  name: 'Alice',
  sayName: function() {
    console.log('bound person this.name:', this.name);
  }
};

// Bind person.sayName so `this` is the person object when button is clicked
btn.addEventListener('click', person.sayName.bind(person));