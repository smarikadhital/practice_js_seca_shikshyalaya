// Task8: async/await fetching mock users
export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
      ]);
    }, 1000);
  });
}

// consumer using async/await
async function getUsers() {
  const users = await fetchUsers();
  console.log('Task8 - users:', users);
}

getUsers();