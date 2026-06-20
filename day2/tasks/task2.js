// Task2: `this` losing context and fixing with .bind(this)
const app = {
  name: 'AppUser',
  handleClick() {
    console.log('Task2 - handleClick this.name:', this.name);
  }
};

// Detached function loses context
const detached = app.handleClick;
try {
  detached(); // `this` is undefined in strict mode
} catch (e) {
  console.log('Task2 - detached() error (expected in strict):', e.message || e);
}

// Fix with .bind()
const bound = app.handleClick.bind(app);
bound(); // AppUser

// If running in a browser, demonstrate with a real button too
if (typeof document !== 'undefined') {
  const btn = document.createElement('button');
  btn.textContent = 'Task2 Click Me';
  document.body.appendChild(btn);

  // Wrong: method passed directly -> loses `this`
  btn.addEventListener('click', app.handleClick);
  // Fixed: bound method
  btn.addEventListener('click', app.handleClick.bind(app));
}