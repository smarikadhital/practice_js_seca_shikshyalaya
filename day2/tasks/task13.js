// 1) Try calling an undefined function
try {
  undefinedFunction();
} catch (err) {
  console.log('1) undefinedFunction catch ->', err.message);
}

// 2) Divide by zero (JS returns Infinity) and explicit check with custom error
const numerator = 10;
const denom = 0;
const result = numerator / denom;
console.log('2) division 10/0 ->', result); // Infinity

function safeDivide(a, b) {
  if (b === 0) throw new Error('DivisionByZero: denominator is 0');
  return a / b;
}
try {
  safeDivide(5, 0);
} catch (err) {
  console.log('2) safeDivide catch ->', err.message);
}

// 3) Throw error manually with custom message and type
try {
  throw new TypeError('Custom type error thrown manually');
} catch (err) {
  console.log('3) manual throw caught ->', err.name + ':', err.message);
}

// 4) Function with try/catch demonstrating multiple catch messages (branching)
function parseSafe(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (err) {
    // Multiple catch messages via conditional handling
    if (err instanceof SyntaxError) {
      console.log('4) parseSafe: SyntaxError ->', err.message);
    } else if (err instanceof TypeError) {
      console.log('4) parseSafe: TypeError ->', err.message);
    } else {
      console.log('4) parseSafe: Other error ->', err.name, err.message);
    }
    return null;
  }
}

// 5) Use finally
try {
  console.log('5) entering try block');
  // no-op
} catch (err) {
  console.log('5) catch', err.message);
} finally {
  console.log('5) finally always runs');
}

// 6) JSON.parse with invalid JSON and log error name
const invalid = '{"a":1,}';
try {
  JSON.parse(invalid);
} catch (err) {
  console.log('6) JSON.parse invalid ->', err.name, '-', err.message);
}

// 7) Try/catch inside async function and multiple awaits demonstration
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncErrorDemo() {
  try {
    console.log('7) asyncErrorDemo start');
    await wait(200);
    // simulate an awaited rejection
    await Promise.reject(new Error('Simulated async failure'));
    console.log('7) this will not run');
  } catch (err) {
    console.log('7) async caught ->', err.name + ':', err.message);
  } finally {
    console.log('7) async finally');
  }
}

asyncErrorDemo();

// 8) Multiple catch scenarios with nested try
try {
  try {
    throw new RangeError('Inner range problem');
  } catch (innerErr) {
    console.log('8) inner catch ->', innerErr.name, innerErr.message);
    // rethrow to outer
    throw innerErr;
  }
} catch (outerErr) {
  console.log('8) outer catch ->', outerErr.name, outerErr.message);
}