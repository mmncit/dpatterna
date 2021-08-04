
import {ChocoCart, ButterscotchCart, StrawberryCart} from "../patterns/factory/factory-icecream";
import {getIcecream} from "../pages/hello-factory/prouct-provider"

describe("Testing iceCreamFactory", () => {

    test('Buttery Butterscotch', () => {
        let expected = getIcecream("Buttery Butterscotch");
        let reality = new ButterscotchCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Sweety Strawberry', () => {
        let expected = getIcecream('Sweety Strawberry');
        let reality = new StrawberryCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Choco Blast', () => {
        let expected = getIcecream('Choco Blast');
        let reality = new ChocoCart();
        expect(expected).toEqual(reality.getIcecream());
    })
})