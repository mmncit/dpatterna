import { createUser, multiplyBy2, UserCreator } from "./prototype";

describe("prototype", () => {
  console.log = jest.fn();
  test("creation of object", () => {
    const user1 = createUser("Adam", 4);

    // each object has access to __proto__ (double underscore proto)
    // and it has access to the function store
    user1.increment();
    expect(user1.name).toBe("Adam");
    expect(user1.score).toBe(5);

    user1.login();
    expect(console.log).toHaveBeenCalledWith("logged in as Adam");
  });

  test("functions are function + object combo", () => {
    (multiplyBy2 as any).store = 5;
    expect((multiplyBy2 as any).store).toBe(5);
    expect(multiplyBy2.prototype).toBeDefined();
  });

  test("new keyword and prototype chaining", () => {
    const user1 = new UserCreator("Eva", 9);
    // new keyword
    // 1. create an empty object and assign to this
    // 2. __proto__ bond to UserCreator.prototype
    // 3. return

    expect(user1.name).toBe("Eva");
    expect(user1.score).toBe(9);

    user1.increment();
    expect(user1.score).toBe(10);

    user1.login();
    expect(console.log).toHaveBeenCalledWith("logged in as Eva");
  });

  test("this keyword scoping issue", () => {
    const user1 = new UserCreator("Eva", 9);

    expect(() => {
      user1.buggyIncrement();
    }).toThrowError("Cannot read properties of undefined (reading 'score')");
  });

  test("arrow functions bypass the issue referring to window object", () => {
    const user1 = new UserCreator("Eva", 9);

    user1.arrowIncrement();
    expect(user1.score).toBe(10);
  });
});
