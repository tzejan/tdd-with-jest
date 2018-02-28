const expandNumber = require("../src/expandNumber");

test('12 should be returned as "10 + 2"', function() {
  expect(expandNumber(12)).toBe("10 + 2");
});

test('42 should be returned as "40 + 2"', function() {
  expect(expandNumber(42)).toBe("40 + 2");
});

// write your own tests!
