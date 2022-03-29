const lib = require("../lib");

describe("absolute()", () => {
  it("should return positive number if input is positive", () => {
    expect(lib.absolute(1)).toBe(1);
  });

  it("should return positive number if input is negative", () => {
    expect(lib.absolute(-1)).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    expect(lib.absolute(0)).toBe(0);
  });
});

describe("greet()", () => {
  it("should return greeting message", () => {
    expect(lib.greet("Philipp")).toMatch(/Philipp/);
  });
});

describe("getCurrencies()", () => {
  it("should return supported currencies", () => {
    expect(lib.getCurrencies()).toEqual(
      expect.arrayContaining(["EUR", "AUD", "USD"])
    );
  });
});

describe("getProduct()", () => {
  it("should return the product with given id", () => {
    // test for equality
    expect(lib.getProduct(1)).toEqual({ id: 1, price: 10 });

    // better if only interested in certain properties
    expect(lib.getProduct(1)).toMatchObject({ id: 1, price: 10 });

    expect(lib.getProduct(1)).toHaveProperty("id", 1);
    expect(lib.getProduct(1)).toHaveProperty("price", 10);
  });
});

describe("registerUser()", () => {
  it("should return a user object if valid username is passed", () => {
    expect(lib.registerUser("philipp")).toMatchObject({ username: "philipp" });
  });
  it("should throw if username is falsy", () => {
    // test for equality
    expect(() => {
      lib.registerUser("");
    }).toThrow();
  });
});
