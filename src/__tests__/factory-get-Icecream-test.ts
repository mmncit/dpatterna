
import {getIcecream} from "../pages/hello-factory/prouct-provider";

describe("Ice-cream Factory Context", () => {
    it("iceCream should be equal to butterscotch", () => {
        const iceCream = getIcecream("Buttery Butterscotch");
        expect(iceCream).toEqual("butterscotch");
    });

    it("iceCream should be equal to strawberry", () => {
        const iceCream = getIcecream("Sweety Strawberry");
        expect(iceCream).toEqual("strawberry");
    });

    it("iceCream should be equal to choco", () => {
        const iceCream = getIcecream("Choco Blast");
        expect(iceCream).toEqual("choco");
    });

});
