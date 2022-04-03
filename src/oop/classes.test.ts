import { User } from "./classes";
describe("class", () => {
  test("classes are facade", () => {
    const user1 = new User("Eva", 12);
    user1.increment();
    expect(user1.name).toBe("Eva");
    expect(user1.score).toBe(13);
  });

  test("classes add functions to prototype", () => {
    expect(User.prototype.increment).toBeDefined();
    expect(User.prototype.login).toBeDefined();
  });
});
