const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it formats correctly", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(100000)).toBe("100,000");
  })

  test("it works with negative numbers", () => {
    expect(addCommas(-5000)).toBe("-5,000");
  })
});
