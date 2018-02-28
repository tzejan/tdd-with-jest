const kebabize = require("../src/kebabize");

test("hiThere should be kebabized to hi-there", function() {
  expect(kebabize("hiThere")).toBe("hi-there");
});

test("hiThereBruceWayne should be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toBe("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
