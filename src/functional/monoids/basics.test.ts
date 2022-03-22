// Monoid = Semigroup + Identity

export const Sum = (x: number) => ({
  x,
  concat: (other: { x: number }) => Sum(x + other.x),
  empty: () => Sum(0),
});

describe("Monoid", () => {
  test("general test", () => {
    expect(Sum(2).concat(Sum(4)).x).toBe(6);
  });
});
