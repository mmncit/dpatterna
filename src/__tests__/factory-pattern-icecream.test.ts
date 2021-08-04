import {
    ButterscotchCart, 
    ChocoCart, 
    StrawberryCart
} from "../patterns/factory/factory-icecream";
import { 
    getIcecream 
} from "../pages/hello-factory/prouct-provider";

describe("Icecream Factory", () => {
    test("Butterscotch ice cream", () => {
        let expectation = getIcecream("Buttery Butterscotch");
        let reality = new ButterscotchCart();
        expect(expectation).toEqual(reality.getIcecream());
    });

    test('Choclate ice cream',()=>{
        let expectation = getIcecream('Choco Blast')
        let reality = new ChocoCart()
        expect(expectation).toEqual(reality.getIcecream())
    })
    test('Strawberry ice cream',()=>{
        let expectation = getIcecream('Sweety Strawberry')
        let reality = new StrawberryCart()
        expect(expectation).toEqual(reality.getIcecream())
    })
})