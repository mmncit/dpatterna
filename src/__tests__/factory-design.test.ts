import { getIcecream } from "pages/hello-factory/prouct-provider";
import {
  ChocoCart,
} from "patterns/factory/factory-icecream";

describe("Factory Icecream Pattern Test", () => {
  test("ChocoCart", () => {
    const expected = getIcecream("Choco Blast");
    const ans = new ChocoCart().getIcecream();
    expect(expected).toEqual(ans);
  })

}
)