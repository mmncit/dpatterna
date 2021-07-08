import {
  Context,
  Addition,
  Subtraction,
  Multiplication,
} from "./strategy-calculator";

describe("Calculator context", () => {
  const context = new Context(new Addition());
  it("addition should be performed when Addition stragety is set", () => {
    expect(context.performOperation()).toEqual(6);
  });

  it("subtraction should be performed when Subtraction stragety is set", () => {
    context.setStrategy(new Subtraction());
    expect(context.performOperation()).toEqual(-4);
  });

  it("multiplication should be performed when Multiplication stragety is set", () => {
    context.setStrategy(new Multiplication());
    expect(context.performOperation()).toEqual(5);
  });
});
