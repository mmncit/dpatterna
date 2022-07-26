import { PaidUserCreator } from "./calls";

describe("calls and apply", () => {
  const obj = {
    num: 3,
    increment: function () {
      this.num++;
    },
  };
  const otherObj = {
    num: 10,
  };
  test(".call", () => {
    obj.increment();
    // in local memory "this" refers to obj
    expect(obj.num).toBe(4);

    obj.increment.call(otherObj);
    // obj.increment has access ot Function object which has call
    // in local memory "this" refers to otherObj

    expect(otherObj.num).toBe(11);
  });

  test("pseudoclassical approach", () => {
    const paidUser1 = new PaidUserCreator("Alyssa", 8, 25);
    paidUser1.increaseBalance();
    expect(paidUser1.accountBalance).toBe(26);
    paidUser1.increment();
    expect(paidUser1.score).toBe(9);
  });
});
