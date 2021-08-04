  
import {ChocoStickCart,StrawberryConeCart,ButterscotchCupCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"

describe("Abstract factory icecream test", () => {
    test('Choco icecream on stick test', () => {
        let expected = getIcecream('Choco Blast','Stick');
        let reality = new ChocoStickCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Strawberry icecream on cone test', () => {
       let expected = getIcecream('Sweety Strawberry','Cone');
        let reality = new StrawberryConeCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Butterscotch icecream on cup test', () => {
        let expected = getIcecream('Buttery Butterscotch','Cup');
        let reality = new ButterscotchCupCart();
        expect(expected).toEqual(reality.getIcecream());
    })

})