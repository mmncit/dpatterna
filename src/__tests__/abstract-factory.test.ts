import {ChocoStickCart,StrawberryConeCart,ButterscotchCupCart, StrawberryStickCart, ChocoConeCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"

describe("Abstract factory icecream test", () => {
    test('Sweety Strawberry on stick test', () => {
        let expected = getIcecream('Sweety Strawberry','Stick');
        let reality = new StrawberryStickCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Buttery Butterscotch on cup test', () => {
       let expected = getIcecream('Buttery Butterscotch','Cup');
        let reality = new ButterscotchCupCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Choco Blast on cone test', () => {
        let expected = getIcecream('Choco Blast','Cone');
        let reality = new ChocoConeCart();
        expect(expected).toEqual(reality.getIcecream());
    })

})