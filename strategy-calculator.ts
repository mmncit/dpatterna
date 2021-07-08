export class Context {
  // ref to the strategy
  private strategy: Calculator;

  // to accept varied strategy through constructor
  constructor(strategy: Calculator) {
    this.strategy = strategy;
  }
  // to update strategy through set during runtime
  public setStrategy(strategy: Calculator) {
    this.strategy = strategy;
  }

  public performOperation() {
    // context does not know the strategy. It will be during run time
    return this.strategy.calculate(1, 5);
  }
}

interface Calculator {
  calculate(a: number, b: number): number;
}

// concrete strategy
export class Addition implements Calculator {
  calculate(a: number, b: number): number {
    return a + b;
  }
}

class Subtraction implements Calculator {
  calculate(a: number, b: number): number {
    return a - b;
  }
}

/*
// runtime

const context = new Context(new Addition());
console.log(context.performOperation());

context.setStrategy(new Subtraction());
console.log(context.performOperation());

*/
