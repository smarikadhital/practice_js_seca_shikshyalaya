// Task7: Promise that resolves after 2 seconds with app settings
export function fetchSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: 'dark', language: 'en' });
    }, 2000);
  });
}

// Use .then() to print
fetchSettings().then(settings => console.log('Task7 - settings:', settings));