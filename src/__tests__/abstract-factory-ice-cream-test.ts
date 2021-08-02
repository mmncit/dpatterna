
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider";

describe("Ice-cream Factory Context", () => {
    it("iceCream should be equal to stick/butterscotch", () => {
        const iceCream = getIcecream("Buttery Butterscotch","Stick");
        expect(iceCream).toEqual("stick/butterscotch");
    });

    it("iceCream should be equal to cup/butterscotch", () => {
        const iceCream = getIcecream("Buttery Butterscotch","Cup");
        expect(iceCream).toEqual("cup/butterscotch");
    });

    it("iceCream should be equal to cone/butterscotch", () => {
        const iceCream = getIcecream("Buttery Butterscotch","Cone");
        expect(iceCream).toEqual("cone/butterscotch");
    });




    it("iceCream should be equal to stick/strawberry", () => {
        const iceCream = getIcecream("Sweety Strawberry","Stick");
        expect(iceCream).toEqual("stick/strawberry");
    });

    it("iceCream should be equal to cup/strawberry", () => {
            const iceCream = getIcecream("Sweety Strawberry","Cup");
        expect(iceCream).toEqual("cup/strawberry");
    })

    it("iceCream should be equal to cone/strawberry", () => {
        const iceCream = getIcecream("Sweety Strawberry","Cone");
        expect(iceCream).toEqual("cone/strawberry");
    })



    it("iceCream should be equal to stick/choco", () => {
        const iceCream = getIcecream("Choco Blast","Stick");
        expect(iceCream).toEqual("stick/choco");
    });
    it("iceCream should be equal to cup/choco", () => {
        const iceCream = getIcecream("Choco Blast", "Cup");
        expect(iceCream).toEqual("cup/choco");
    });

    it("iceCream should be equal to cone/choco", () => {
        const iceCream = getIcecream("Choco Blast", "Cone");
        expect(iceCream).toEqual("cone/choco");
    });
});
