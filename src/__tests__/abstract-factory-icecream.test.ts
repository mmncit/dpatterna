import { getIcecream } from "../pages/hello-abstract-factory/prouct-provider";
import {
  ButterscotchStickCart,
  ChocoCupCart,
  StrawberryConeCart,
} from "../patterns/factory/abstract-factory-icecream";

describe("IceCream Abstract Factory Test", () => {
  test("Strawberry Ice Cream with Cone", () => {
    let expectation = getIcecream("Sweety Strawberry", "Cone");
    let reality = new StrawberryConeCart();

    expect(expectation).toEqual(reality.getIcecream());
  });
  test("Choco Ice Cream with Cup", () => {
    let expectation = getIcecream("Choco Blast", "Cup");
    let reality = new ChocoCupCart();

    expect(expectation).toEqual(reality.getIcecream());
  });
  test("Butterscotch Ice Cream with Stick", () => {
    let expectation = getIcecream("Buttery Butterscotch", "Stick");
    let reality = new ButterscotchStickCart();

    expect(expectation).toEqual(reality.getIcecream());
  });
});
