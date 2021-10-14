import { sum, substract, divide, multiply } from "../misc/calculation";

describe("calculation", () => {
  test("summation of 1 and 5 should produce 6", () => {
    expect(sum(1, 5)).toEqual(6);
  });
  test("summation of 1.5 and 5.6 should produce 7.1", () => {
    expect(sum(1.5, 5.6)).toEqual(7.1);
  });
  test("substraction of 1 from 5 should produce 4", () => {
    expect(substract(5, 1)).toEqual(4);
  });
  test("substraction of 1.5 from 5.0 should produce 3.5", () => {
    expect(substract(5.0, 1.5)).toEqual(3.5);
  });
  test("division of 4 by 2 should produce 2", () => {
    expect(divide(4, 2)).toEqual(2);
  });
  test("division of 100 by 0 should produce infinity", () => {
    expect(divide(100, 0)).toEqual(Infinity);
  });
  test("multiplication of 10 and 15 should produce 150", () => {
    expect(multiply(10, 15)).toEqual(150);
  });
});
