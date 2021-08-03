import {StrawberryStickCart,ChocoStickCart,StrawberryConeCart,ButterscotchCupCart} from "../patterns/factory/abstract-factory-icecream";
import { getIcecream } from "../pages/hello-abstract-factory/prouct-provider"

describe("Testing abstract iceCreamFactory", () => {

    test('Strawberry icecream on stick', () => {
        let expected = getIcecream('Sweety Strawberry','Stick');
         let reality = new StrawberryStickCart();
         expect(expected).toEqual(reality.getIcecream());
    })
    
    test('Choco icecream on stick', () => {
        let expected = getIcecream('Choco Blast','Stick');
        let reality = new ChocoStickCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Strawberry icecream on cone', () => {
       let expected = getIcecream('Sweety Strawberry','Cone');
        let reality = new StrawberryConeCart();
        expect(expected).toEqual(reality.getIcecream());
    })

    test('Butterscotch icecream on cup', () => {
        let expected = getIcecream('Buttery Butterscotch','Cup');
        let reality = new ButterscotchCupCart();
        expect(expected).toEqual(reality.getIcecream());
    })

})