import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"
import {ChocoCupCart, ChocoStickCart, ChocoConeCart, StrawberryStickCart, StrawberryConeCart, StrawberryCupCart, ButterscotchStickCart, ButterscotchConeCart, ButterscotchCupCart,} from "../patterns/factory/abstract-factory-icecream";

describe("Abstract Factory Icecream  Test", () => {
    test('Choco Blast on Stick',()=>{
       let expected_icecream =getIcecream('Choco Blast','Stick')
        let icecream = new ChocoStickCart()
        expect(expected_icecream).toEqual(icecream.getIcecream())

    })
    test('Choco Blast cone test',()=>{
       let expected_icecream =getIcecream('Choco Blast','Cone')
        let icecream = new ChocoConeCart()
        expect(expected_icecream).toEqual(icecream.getIcecream())

    })
    test('Choco Ice cream cup test',()=>{
        let expected_icecream =getIcecream('Choco Blast','Cup')
        let icecream = new ChocoCupCart()
        expect(expected_icecream).toEqual(icecream.getIcecream())
    })



    test('Sweety Strawberry Stick test',()=>{
        let expected_icecream =getIcecream('Sweety Strawberry','Stick')
         let icecream = new StrawberryStickCart()
         expect(expected_icecream).toEqual(icecream.getIcecream())

     })
     test('Sweety Strawberry cone test',()=>{
        let expected_icecream =getIcecream('Sweety Strawberry','Cone')
         let icecream = new StrawberryConeCart()
         expect(expected_icecream).toEqual(icecream.getIcecream())

     })
     test('Sweety Strawberry cup test',()=>{
         let expected_icecream =getIcecream('Sweety Strawberry','Cup')
         let icecream = new StrawberryCupCart()
         expect(expected_icecream).toEqual(icecream.getIcecream())
     })


     test('Buttery Butterscotch Stick test',()=>{
        let expected_icecream =getIcecream('Buttery Butterscotch','Stick')
         let icecream = new ButterscotchStickCart()
         expect(expected_icecream).toEqual(icecream.getIcecream())

     })
     test('Buttery Butterscotch cone test',()=>{
        let expected_icecream =getIcecream('Buttery Butterscotch','Cone')
         let icecream = new ButterscotchConeCart()
         expect(expected_icecream).toEqual(icecream.getIcecream())

     })
     test('Buttery Butterscotch cup test',()=>{
         let expected_icecream =getIcecream('Buttery Butterscotch','Cup')
         let icecream = new ButterscotchCupCart()
         expect(expected_icecream).toEqual(icecream.getIcecream())
     })

})