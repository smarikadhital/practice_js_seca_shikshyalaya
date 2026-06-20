
const obj = {
  value: 42,
  regular: function() {
    console.log('regular this.value:', this.value);
  },
  arrow: () => {
    console.log('arrow this.value:', this.value); // lexical `this` (likely undefined)
  }
};

obj.regular(); // 42
obj.arrow(); // undefined in most cases