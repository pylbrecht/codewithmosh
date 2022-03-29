const lib = require("../exercise1");

describe("FizzBuzz", () => {
  it("returns Fizz if number divides by 3", () => {
    expect(lib.fizzBuzz(3)).toBe("Fizz");
  });
  it("returns Buzz if number divides by 5", () => {
    expect(lib.fizzBuzz(5)).toBe("Buzz");
  });
  it("returns FizzBuzz if number divides by 3 and 5", () => {
    expect(lib.fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("throws if input is not a number", () => {
    expect(() => {
      lib.fizzBuzz("NaN");
    }).toThrow();
  });
  it("returns input if number does not divide by 3 or 5", () => {
    expect(lib.fizzBuzz(11)).toBe(11);
  });
});
