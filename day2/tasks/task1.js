// Task1: `this` inside an object method
const user = {
  name: 'Alice',
  login() {
    console.log('Task1 - Logged in user:', this.name);
  }
};

user.login();
// Individual demos moved to separate files in this folder:
// - task_obj_method.js
// - task_detached_bind.js
// - task_bind_two_objects.js
// - task_click_handler.js
// - task_strict.js
// - task_arrow_vs_normal.js
// - task_nested.js
// - task_call.js
// - task_apply.js

console.log('Demos split across separate files in the day2 folder.');