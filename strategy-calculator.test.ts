import { Context, Addition } from "./strategy-calculator";

describe("Calculator context", () => {
  it("addition should be performed when Addition stragety is set", () => {
    const context = new Context(new Addition());
    expect(context.performOperation()).toEqual(6);
  });
});
