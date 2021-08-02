
import {getIcecream} from "../pages/hello-factory/prouct-provider";

describe("Ice-cream Factory Context", () => {
    it("iceCream should be equal to butterscotch", () => {
        const iceCream = getIcecream("Buttery Butterscotch");
        expect(iceCream==="butterscotch");
    });

    it("iceCream should be equal to strawberry", () => {
        const iceCream = getIcecream("Sweety Strawberry");
        expect(iceCream==="strawberry");
    });

    it("iceCream should be equal to choco", () => {
        const iceCream = getIcecream("Choco Blast");
        expect(iceCream==="choco");
    });

});
