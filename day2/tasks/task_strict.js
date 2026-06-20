
(function strictDemo() {
  'use strict';
  function strictFn() {
    console.log('strictFn this:', this); // undefined in strict mode
  }
  strictFn();
})();