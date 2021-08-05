import { getIcecream } from "pages/hello-factory/prouct-provider";
import {
  ChocoCart,
  ButterscotchCart,
  StrawberryCart,
} from "patterns/factory/factory-icecream";

describe("Factory Icecream Pattern Test", () => {
  test("Choco_Cart_test", () => {
    const expected = getIcecream("Choco Blast")
    const answer = new ChocoCart().getIcecream()
    expect(expected).toEqual(answer)
  });


  test("Strawberry_Cart_test", () => {
    const expected = getIcecream("Sweety Strawberry")
    const answer = new StrawberryCart().getIcecream()
    expect(expected).toEqual(answer)
  });


  test("Butterscotch_Cart_test", () => {
    const expected = getIcecream("Buttery Butterscotch")
    const answer = new ButterscotchCart().getIcecream()
    expect(expected).toEqual(answer)
  });

 
});