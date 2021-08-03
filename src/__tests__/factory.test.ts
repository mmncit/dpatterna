import {ChocoCart, ButterscotchCart, StrawberryCart} from "../patterns/factory/factory-icecream";
import {getIcecream} from "../pages/hello-factory/prouct-provider"

describe("Factory icecream test", () => {
    test('Choco Blast Icecream test', () => {
        let expected = getIcecream('Choco Blast');
        let reality = new ChocoCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Buttery Butterscotch Icecream test', () => {
        let expected = getIcecream("Buttery Butterscotch");
        let reality = new ButterscotchCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Sweety Strawberry Icecream test', () => {
        let expected = getIcecream('Sweety Strawberry');
        let reality = new StrawberryCart();
        expect(expected).toEqual(reality.getIcecream());
    })

})