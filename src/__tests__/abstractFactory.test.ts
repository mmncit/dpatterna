import {ButterscotchConeCart,StrawberryStickCart,ChocoCupCart,ButterscotchStickCart,StrawberryConeCart,StrawberryCupCart,ButterscotchCupCart,ChocoStickCart,ChocolateConeCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
describe("Icecream Abstract Factory", () => {
    test('Strawberry Ice cream with stick',()=>{
       let expectation =getIcecream('Sweety Strawberry','Stick')
        let reality = new StrawberryStickCart()
        expect(expectation).toEqual(reality.getIcecream())

    })

    test('Strawberry Ice cream with cup',()=>{
        let expectation =getIcecream('Sweety Strawberry','Cup')
         let reality = new StrawberryCupCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })

     test('Strawberry Ice cream with cone',()=>{
        let expectation =getIcecream('Sweety Strawberry','Cone')
         let reality = new StrawberryConeCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
    test('Butterscotch Ice cream with cone',()=>{
       let expectation =getIcecream('Buttery Butterscotch','Cone')
        let reality = new ButterscotchConeCart()
        expect(expectation).toEqual(reality.getIcecream())

    })

    test('Butterscotch Ice cream with cup',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Cup')
         let reality = new ButterscotchCupCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })

     test('Butterscotch Ice cream with stick',()=>{
        let expectation =getIcecream('Buttery Butterscotch','Stick')
         let reality = new ButterscotchStickCart()
         expect(expectation).toEqual(reality.getIcecream())
 
     })
    test('Choco Ice cream with cup',()=>{
        let expectation =getIcecream('Choco Blast','Cup')
        let reality = new ChocoCupCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Choco Ice cream with stick',()=>{
        let expectation =getIcecream('Choco Blast','Stick')
        let reality = new ChocoStickCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

    test('Choco Ice cream with cone',()=>{
        let expectation =getIcecream('Choco Blast','Cone')
        let reality = new ChocolateConeCart()
        expect(expectation).toEqual(reality.getIcecream())
    })

}) 