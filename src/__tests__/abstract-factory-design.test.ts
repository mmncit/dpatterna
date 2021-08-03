import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
import {ButterscotchConeCart, ChocoStickCart, StrawberryCupCart,} from "../patterns/factory/abstract-factory-icecream";

describe("Abstract Factory Pattern IceCream Test",()=>{

    test('Choco Blast on Stick',()=>{
        let expectation =getIcecream('Choco Blast','Stick')
        let reality = new ChocoStickCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Sweety Strawberry on Cup',()=>{
        let expectation =getIcecream('Sweety Strawberry','Cup')
         let reality = new StrawberryCupCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Buttery Butterscotch on Cone',()=>{
         let expectation =getIcecream('Buttery Butterscotch','Cone')
         let reality = new ButterscotchConeCart()
         expect(expectation).toEqual(reality.getIcecream())
     })
}

)