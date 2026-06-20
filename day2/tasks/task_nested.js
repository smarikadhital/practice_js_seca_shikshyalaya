
const outer = {
  name: 'Outer',
  inner: {
    name: 'Inner',
    getName: function() {
      console.log('inner.getName this.name:', this.name);
    }
  }
};

outer.inner.getName(); // Inner