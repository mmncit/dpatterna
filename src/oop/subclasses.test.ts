import { paidUserCreator } from "./subclasses";

describe("subclasses", () => {
  console.log = jest.fn();
  test("sub-factory function affects the functionality of an object that is instantiated", () => {
    const paidUser1 = paidUserCreator("Alyssa", 8, 25);
    paidUser1.increaseBalance();
    expect(paidUser1.accountBalance).toBe(26);
    paidUser1.login();
    expect(console.log).toBeCalledWith("logged in as Alyssa");
  });
});
