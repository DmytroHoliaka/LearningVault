it("Raises x to the power n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

// 1. The describe block is missing
// 2. Many equal blocks
// 3. Unnecessary logic in the test