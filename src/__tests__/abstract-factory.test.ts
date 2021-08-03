import {ChocoCupCart, StrawberryCupCart, ButterscotchCupCart, StrawberryStickCart, ButterscotchConeCart, StrawberryConeCart, ChocoConeCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"

describe("Abstract factory icecream test", () => {
    test('Choco icecream on cup test', () => {
        let expected = getIcecream('Choco Blast', 'Cup');
        let reality = new ChocoCupCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Strawberry icecream on cup test', () => {
        let expected = getIcecream('Sweety Strawberry', 'Cup');
        let reality = new StrawberryCupCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Butterscotch icecream on cup test', () => {
        let expected = getIcecream('Buttery Butterscotch', 'Cup');
        let reality = new ButterscotchCupCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Strawberry icecream on stick test', () => {
        let expected = getIcecream('Sweety Strawberry', 'Stick');
        let reality = new StrawberryStickCart();
        expect(expected).toEqual(reality.getIcecream());
     })

     test('Butterscotch icecream on cone test', () => {
        let expected = getIcecream('Buttery Butterscotch', 'Cone');
        let reality = new ButterscotchConeCart();
        expect(expected).toEqual(reality.getIcecream());
    })

     test('Strawberry icecream on cone test', () => {
        let expected = getIcecream('Sweety Strawberry', 'Cone');
        let reality = new StrawberryConeCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Choco icecream on cone test', () => {
        let expected = getIcecream('Choco Blast', 'Cone');
        let reality = new ChocoConeCart();
        expect(expected).toEqual(reality.getIcecream());
    })
}) 