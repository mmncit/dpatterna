import { add } from "ramda";

export interface NewUser {
  name: string;
  score: number;
  increment: Function;
  login: Function;
}

export const userFunctionStore = {
  increment: function () {
    // TODO: seek for the best typing
    (this as unknown as NewUser).score++;
  },
  login: function () {
    console.log(`logged in as ${(this as unknown as NewUser).name}`);
  },
};

export function createUser(name: string, score: number) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

export function multiplyBy2(num: number) {
  // functions are objects (function object combo!)
  return num * 2;
}

// -- new keyword and prototype chaining

export const UserCreator = function (name: string, score: number) {
  this.name = name;
  this.score = score;
};

UserCreator.prototype.increment = function () {
  this.score++;
};

UserCreator.prototype.buggyIncrement = function () {
  function add() {
    this.score++; // this points to the window object
  }
  add();
};

// solve the scope with arrow function
UserCreator.prototype.arrowIncrement = function () {
  const add = () => {
    this.score++;
  };
  add();
};

UserCreator.prototype.login = function () {
  console.log(`logged in as ${this.name}`);
};
