const fizzbuzz = require("../src/fizzbuzz");

test("1 should return number 1", function() {
  expect(fizzbuzz(1)).toBe(1);
});

test("3 should return fizz", function() {
  expect(fizzbuzz(3)).toBe("fizz");
});

test("5 should return buzz", function() {
  expect(fizzbuzz(5)).toBe("buzz");
});

test("15 should return fizzbuzz", function() {
  expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test("16 should return 16", function() {
  expect(fizzbuzz(16)).toBe(16);
});
