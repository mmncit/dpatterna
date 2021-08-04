import {ButterscotchConeCart,StrawberryCupCart,ChocoStickCart} from "../patterns/factory/abstract-factory-icecream";

import {getIcecream} from "../pages/hello-abstract-factory/prouct-provider"

describe("Icecream Abstract Factory", () => {
    test('Strawberry Ice cream with Cup',()=>{
       let expected =getIcecream('Sweety Strawberry','Cup')
        let actual = new StrawberryCupCart()
        expect(expected).toEqual(actual.getIcecream())
    })

    test('Butterscotch Ice cream with Cone',()=>{
       let expected =getIcecream('Buttery Butterscotch','Cone')
        let actual = new ButterscotchConeCart()
        expect(expected).toEqual(actual.getIcecream())
    })

    test('Choco Ice cream with Stick',()=>{
        let expected =getIcecream('Choco Blast','Stick')
        let actual = new ChocoStickCart()
        expect(expected).toEqual(actual.getIcecream())
    })
}) 