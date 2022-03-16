import { of, from } from "rxjs";

describe("Basic Observables", () => {
  describe("of", () => {
    it("should create an observable from its arguments", () => {
      const example$ = of(1, 2, 3, 4);
      const result: number[] = [];

      example$.subscribe((value) => result.push(value));

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe("from", () => {
    it("should create an observable", () => {
      const example$ = from([1, 2, 3, 4]);
      const result: number[] = [];

      example$.subscribe((value) => result.push(value));

      expect(result).toEqual([1, 2, 3, 4]);
    });
  });
});
