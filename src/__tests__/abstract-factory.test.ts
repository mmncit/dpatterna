import {ButterscotchStickCart,StrawberryCupCart,ChocoStickCart,ButterscotchConeCart,StrawberryStickCart,ChocoCupCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
describe("Icecream Abstract Factory", () => {

    test('Butterscotch Ice cream with Stick',()=>{
        let expected =getIcecream('Buttery Butterscotch','Stick')
         let actual = new ButterscotchStickCart()
         expect(expected).toEqual(actual.getIcecream())
     })

     test('Strawberry Ice cream with Cup',()=>{
        let expected =getIcecream('Sweety Strawberry','Cup')
         let actual = new StrawberryCupCart()
         expect(expected).toEqual(actual.getIcecream())
     })

    test('Choco Ice cream with Stick',()=>{
        let expected =getIcecream('Choco Blast','Stick')
         let actual = new ChocoStickCart()
         expect(expected).toEqual(actual.getIcecream())
     })

    test('Strawberry Ice cream with stick',()=>{
       let expected =getIcecream('Sweety Strawberry','Stick')
        let actual = new StrawberryStickCart()
        expect(expected).toEqual(actual.getIcecream())

    })
    test('Butterscotch Ice cream with cone',()=>{
       let expected =getIcecream('Buttery Butterscotch','Cone')
        let actual = new ButterscotchConeCart()
        expect(expected).toEqual(actual.getIcecream())

    })
    test('Choco Ice cream with cup',()=>{
        let expected =getIcecream('Choco Blast','Cup')
        let actual = new ChocoCupCart()
        expect(expected).toEqual(actual.getIcecream())
    })

})