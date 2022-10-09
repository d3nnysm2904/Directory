const { square } = require("./square");

describe("squares", function () {
  test("Should square", function () {
    const res = square(3);
    expect(res).toEqual(9);
  });

  test("square negatives", () => {
    const num = square(-9);
    expect(num).toEqual(81);
  });
});
