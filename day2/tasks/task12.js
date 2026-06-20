// 1) Promise that resolves
const pResolved = Promise.resolve('Resolved value');
pResolved.then(value => console.log('pResolved then:', value));

// 2) Promise that rejects
const pRejected = Promise.reject(new Error('Rejected value'));
pRejected.catch(err => console.log('pRejected catch:', err.message));

// 3) Use .then() chaining and .catch()
new Promise((resolve) => setTimeout(() => resolve(1), 300))
  .then(x => {
    console.log('then chain step 1:', x);
    return x + 1;
  })
  .then(x => {
    console.log('then chain step 2:', x);
    return x * 3;
  })
  .then(x => console.log('then chain final:', x))
  .catch(err => console.error('chain error:', err));

// 4) Convert to async/await (function)
async function demoAsyncAwait() {
  try {
    const v = await Promise.resolve('async resolved');
    console.log('demoAsyncAwait:', v);
  } catch (err) {
    console.error('demoAsyncAwait error:', err);
  }
}
demoAsyncAwait();

// 5) Wait 2 seconds using setTimeout wrapped in a Promise
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(2000).then(() => console.log('waited 2 seconds (then)'));

// 6) Create function that returns a Promise
function fetchNumber(after = 500, num = 7) {
  return new Promise((resolve) => setTimeout(() => resolve(num), after));
}

// 7) Chain promises returned by the function
fetchNumber(300, 2)
  .then(n => n + 3)
  .then(n => fetchNumber(200, n * 2))
  .then(n => console.log('chained fetchNumber result:', n))
  .catch(err => console.error('fetchNumber chain error:', err));

// 8) Use await inside async function and multiple awaits
async function multipleAwaitsDemo() {
  console.log('multipleAwaitsDemo start');
  const a = await fetchNumber(400, 10);
  console.log('first await result:', a);
  await wait(500);
  const b = await fetchNumber(300, a + 5);
  console.log('second await result:', b);
  const c = await Promise.resolve(b * 2);
  console.log('third await (immediate promise):', c);
  console.log('multipleAwaitsDemo end');
}

multipleAwaitsDemo();