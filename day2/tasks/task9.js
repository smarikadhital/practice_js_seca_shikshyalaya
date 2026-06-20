// Task9: fetchUsers that randomly rejects; handle with try/catch
export function fetchUsersUnreliable() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve([
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' }
        ]);
      } else {
        reject(new Error('Network error: failed to fetch users'));
      }
    }, 1000);
  });
}

async function getUsersSafe() {
  try {
    const users = await fetchUsersUnreliable();
    console.log('Task9 - users:', users);
  } catch (err) {
    console.log('Task9 - Friendly message: could not load users.');
    console.log('Task9 - Error details (dev):', err.message);
  }
}

getUsersSafe();