const calculator = require("./index");

test("Returns 4", () => {
    expect(calculator.plus(2,2)).toBe(4);
});

test("Returns 0", () => {
    expect(calculator.minus(2,2)).toBe(0);
});
