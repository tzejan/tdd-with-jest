const kebabize = require("../src/kebabize");

test("hiThere should be kebabized to hi-there", function() {
  expect(kebabize("hiThere")).toBe("hi-there");
});

test("hiThereBruceWayne should be kebabized to hi-there-bruce-wayne", function() {
  expect(kebabize("hiThereBruceWayne")).toBe("hi-there-bruce-wayne");
});

// write additional tests to ensure kebabize() works as expected
test('camelsHave3Humps should be kebabized to camels-have-humps', function() {
  expect(kebabize('camelsHave3Humps')).toBe("camels-have-humps");
});

test('"" should be kebabized to ""', function() {
  expect(kebabize('')).toBe("");
});

test('itsahorse should be kebabized to itsahorse', function() {
  expect(kebabize('itsahorse')).toBe("itsahorse");
});
