import { ButterscotchConeCart, StrawberryStickCart, ChocoCupCart } from "./abstract-factory-icecream";
import { getIcecream } from "../../../pages/hello-abstract-factory/prouct-provider";


describe("Ice cream Abstract Factory", () => {

    test('Strawberry Icecream with stick', () => {
        let expectation = getIcecream('Sweety Strawberry', 'Stick');
        let reality = new StrawberryStickCart();
        expect(expectation).toEqual(reality.getIcecream());
    });

    test('Butterscotch Icecream with cone', () => {
        let expectation = getIcecream('Buttery Butterscotch', 'Cone');
        let reality = new ButterscotchConeCart();
        expect(expectation).toEqual(reality.getIcecream());
    });

    test('Choco Ice cream with cup', () => {
        let expectation = getIcecream('Choco Blast','Cup');
        let reality = new ChocoCupCart();
        expect(expectation).toEqual(reality.getIcecream());
    });

});