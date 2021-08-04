import {
    ButterscotchStickCart, 
    ButterscotchCupCart, 
    ButterscotchConeCart,
    ChocoStickCart, 
    ChocoConeCart, 
    ChocoCupCart 
    StrawberryStickCart, 
    StrawberryCupCart, 
    StrawberryConeCart, 
} from "../patterns/factory/abstract-factory-icecream";

import {
    getIcecream
} from "../pages/hello-abstract-factory/prouct-provider"
describe("Icecream Factory", () => {

     test('Butterscotch ice cream on Stick',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Stick')
         let reality = new ButterscotchStickCart()
         expect(expectation).toEqual(reality.getIcecream())

     })

     test('Butterscotch ice cream on Cup',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Cup')
         let reality = new ButterscotchCupCart()
         expect(expectation).toEqual(reality.getIcecream())

     })

    test('Butterscotch ice cream on Cone',()=>{
       let expectation =getIcecream('Buttery Butterscotch','Cone')
        let reality = new ButterscotchConeCart()
        expect(expectation).toEqual(reality.getIcecream())

    })

    test('Chocolate ice cream on Stick',()=>{
        let expectation =getIcecream('Choco Blast','Stick')
        let reality = new ChocoStickCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Chocolate ice cream on Cup',()=>{
        let expectation =getIcecream('Choco Blast','Cup')
        let reality = new ChocoCupCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Chocolate ice cream on Cone',()=>{
        let expectation =getIcecream('Choco Blast','Cone')
        let reality = new ChocoConeCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Strawberry ice cream on Stick',()=>{
       let expectation =getIcecream('Sweety Strawberry','Stick')
        let reality = new StrawberryStickCart()
        expect(expectation).toEqual(reality.getIcecream())

    })

    test('Strawberry ice cream on Cup',()=>{
        let expectation =getIcecream('Sweety Strawberry','Cup')
         let reality = new StrawberryCupCart()
         expect(expectation).toEqual(reality.getIcecream())

     })

     test('Strawberry ice cream on Cone',()=>{
        let expectation =getIcecream('Sweety Strawberry','Cone')
         let reality = new StrawberryConeCart()
         expect(expectation).toEqual(reality.getIcecream())

     })

})