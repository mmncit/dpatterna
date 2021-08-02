import {
    ChocoCart,
    StrawberryCart,
    ButterscotchCart,
} from "../patterns/factory/factory-icecream";
import { getIcecream } from "../pages/hello-factory/prouct-provider";

describe("TestingFactoryPatternIcecream", () => {
    test("Strawberry", () => {
        let here = getIcecream("Sweety Strawberry");
        let getting = new StrawberryCart();
        expect(here).toEqual(getting.getIcecream());
    });
    test("Choco", () => {
        let here = getIcecream("Choco Blast");
        let getting = new ChocoCart();
        expect(here).toEqual(getting.getIcecream());
    });
    test("Butterscotch", () => {
        let here = getIcecream("Buttery Butterscotch");
        let getting = new ButterscotchCart();
        expect(here).toEqual(getting.getIcecream());
    });
});
