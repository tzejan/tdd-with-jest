const expandNumber = require("../src/expandNumber");

test('12 should be returned as "10 + 2"', function() {
  expect(expandNumber(12)).toBe("10 + 2");
});

// write your own tests!
test('42 should be returned as "40 + 2"', function() {
  expect(expandNumber(42)).toBe("40 + 2");
});

test('142 should be returned as "100 + 40 + 2"', function() {
  expect(expandNumber(142)).toBe("100 + 40 + 2");
});

test('1042 should be returned as "1000 + 40 + 2"', function() {
  expect(expandNumber(1042)).toBe("1000 + 40 + 2");
});

test('400 should be returned as "400"', function() {
  expect(expandNumber(400)).toBe("400");
});

test('0 should be returned as ""', function() {
  expect(expandNumber(0)).toBe("");
});
