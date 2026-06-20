export function getInitials(firstName, lastName) {
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}.`;
}
console.log('task6 initials:', getInitials('Dipak','Shrestha'));