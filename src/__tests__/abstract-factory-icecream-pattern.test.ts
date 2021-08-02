import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
import {ChocoCupCart, ChocoStickCart, ChocoConeCart, StrawberryStickCart, StrawberryConeCart, StrawberryCupCart, ButterscotchStickCart, ButterscotchConeCart, ButterscotchCupCart,} from "../patterns/factory/abstract-factory-icecream";

describe("Abstract Factory Icecream Pattern Test", () => {
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



    test('Sweety Strawberry on Stick',()=>{
        let expectation =getIcecream('Sweety Strawberry','Stick')
         let reality = new StrawberryStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Sweety Strawberry on cone',()=>{
        let expectation =getIcecream('Sweety Strawberry','Cone')
         let reality = new StrawberryConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Sweety Strawberry on cup',()=>{
         let expectation =getIcecream('Sweety Strawberry','Cup')
         let reality = new StrawberryCupCart()
         expect(expectation).toEqual(reality.getIcecream())
     })


     test('Buttery Butterscotch on Stick',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Stick')
         let reality = new ButterscotchStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Buttery Butterscotch on cone',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Cone')
         let reality = new ButterscotchConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
     test('Buttery Butterscotch on cup',()=>{
         let expectation =getIcecream('Buttery Butterscotch','Cup')
         let reality = new ButterscotchCupCart()
         expect(expectation).toEqual(reality.getIcecream())
     })

})