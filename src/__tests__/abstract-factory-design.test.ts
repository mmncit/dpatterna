import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
import {ChocoCupCart, ChocoStickCart, ChocoConeCart,} from "../patterns/factory/abstract-factory-icecream";

describe("Abstract Factory Pattern IceCream Test",()=>{

    test('Choco Blast on Stick',()=>{
        let expectation =getIcecream('Choco Blast','Stick')
        let reality = new ChocoStickCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Choco Blast on cone',()=>{
        let expectation =getIcecream('Choco Blast','Cone')
         let reality = new ChocoConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Choco Ice cream on cup',()=>{
         let expectation =getIcecream('Choco Blast','Cup')
         let reality = new ChocoCupCart()
         expect(expectation).toEqual(reality.getIcecream())
     })
}

)