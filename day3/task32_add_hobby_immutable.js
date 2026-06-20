const person = { name: 'Rita', hobbies: ['reading'] };
const withNewHobby = { ...person, hobbies: [...person.hobbies, 'gaming'] };
console.log('task32 before:', person.hobbies, 'after:', withNewHobby.hobbies);
export { withNewHobby };