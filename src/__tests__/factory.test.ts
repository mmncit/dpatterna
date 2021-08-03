import {ChocoCart, ButterscotchCart, StrawberryCart} from "../patterns/factory/factory-icecream";
import {getIcecream} from "../pages/hello-factory/prouct-provider"

describe("Factory icecream test", () => {
    test('Choco Blast ice-cream', () => {
        let expected = getIcecream('Choco Blast');
        let reality = new ChocoCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Buttery Butterscotch ice-cream', () => {
        let expected = getIcecream("Buttery Butterscotch");
        let reality = new ButterscotchCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Sweety Strawberry ice-cream', () => {
        let expected = getIcecream('Sweety Strawberry');
        let reality = new StrawberryCart();
        expect(expected).toEqual(reality.getIcecream());
    })

}) 