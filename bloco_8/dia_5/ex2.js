const assert = require('assert');

// escreva sum abaixo


const sum = (...numbers) => {
  return numbers.reduce(((acc, val) => {
    return acc + val;
  }),0)
};

// const sum = (...numbers) => {numbers.reduce(((acc, val) => {return acc + val;}),0)};
  //  const sum = (...numbers) => {return numbers.reduce(((acc, val) => {return acc + val;}), 0)};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);