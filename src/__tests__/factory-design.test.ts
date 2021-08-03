import { getIcecream } from "pages/hello-factory/prouct-provider";
import {
  ChocoCart,
  ButterscotchCart,
  StrawberryCart,
} from "patterns/factory/factory-icecream";

describe("Factory Icecream Pattern Test", () => {
  test("ChocoCart", () => {
    const expected = getIcecream("Choco Blast");
    const ans = new ChocoCart().getIcecream();
    expect(expected).toEqual(ans);
  })

  test("ButterscotchCart", () => {
    const expected = getIcecream("Buttery Butterscotch");
    const ans = new ButterscotchCart().getIcecream();
    expect(expected).toEqual(ans);
  });

  test("StrawberryCart", () => {
    const expected = getIcecream("Sweety Strawberry");
    const ans = new StrawberryCart().getIcecream();
    expect(expected).toEqual(ans);
  });

}
)