export function createFunction(array: number[]) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

export function createFlow(array: number[]) {
  let i = 0;
  const inner = {
    next: function () {
      const element = array[i];
      i++;
      return element;
    },
  };
  return inner;
}

export function* createGeneratorFlow() {
  yield 4;
  yield 5;
  yield 6;
}

export function* dynamicGenerator() {
  const num = 10;
  const newNum: number = yield num;
  yield 5 + newNum;
  yield 6;
}

test("return next element", () => {
  const returnNextElement = createFunction([4, 5, 6]);
  expect(returnNextElement()).toBe(4);
  expect(returnNextElement()).toBe(5);
  expect(returnNextElement()).toBe(6);
});

test("create flow returns next element", () => {
  const returnNextElement = createFlow([4, 5, 6]);
  expect(returnNextElement.next()).toBe(4);
  expect(returnNextElement.next()).toBe(5);
  expect(returnNextElement.next()).toBe(6);
});

test("generator function returns next element", () => {
  const returnNextElement = createGeneratorFlow();
  expect(returnNextElement.next()).toEqual({ done: false, value: 4 });
  expect(returnNextElement.next()).toEqual({ done: false, value: 5 });
  expect(returnNextElement.next()).toEqual({ done: false, value: 6 });
  expect(returnNextElement.next()).toEqual({ done: true });
});

test("dynamic generator function returns next element dynamically", () => {
  const returnNextElement = dynamicGenerator();
  expect(returnNextElement.next()).toEqual({ done: false, value: 10 });
  // if no param, it should return NaN
  expect(returnNextElement.next(2)).toEqual({ done: false, value: 7 });
  expect(returnNextElement.next()).toEqual({ done: false, value: 6 });
  expect(returnNextElement.next()).toEqual({ done: true });
});
