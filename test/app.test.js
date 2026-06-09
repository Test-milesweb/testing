const { add } = require("../index");

test("adds 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});
