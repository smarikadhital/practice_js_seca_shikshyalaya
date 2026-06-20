
const shared = function() {
  console.log('shared this.name:', this.name);
};

const a = { name: 'Anna', speak: shared };
const b = { name: 'Ben' };

a.speak(); // Anna
const speakForB = a.speak.bind(b);
speakForB(); // Ben