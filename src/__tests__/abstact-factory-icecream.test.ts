import {
    ButterscotchCupCart,
    ButterscotchConeCart,
    ChocoStickCart,
    ChocoConeCart,
    StrawberryCupCart,
    StrawberryStickCart
  } from "patterns/factory/abstract-factory-icecream";
  import {getIcecream} from '../pages/hello-abstract-factory/prouct-provider'
  
  describe("icecream factory", () => {
    test("If Choco Blast is selected, it will say so", () => {
        let reality1 = new ChocoConeCart()
        let expected1 = getIcecream('Choco Blast', 'Cone')
        let reality2 = new ChocoStickCart()
        let expected2 = getIcecream('Choco Blast', 'Stick')
        expect(expected1).toEqual(reality1.getIcecream());
        expect(expected2).toEqual(reality2.getIcecream());
    })

    test("If Sweety Strawberry is selected, it will say so", () => {
        let reality1 = new StrawberryCupCart()
        let expected1 = getIcecream('Sweety Strawberry', 'Cup')
        let reality2 = new StrawberryStickCart()
        let expected2 = getIcecream('Sweety Strawberry', 'Stick')
        expect(expected1).toEqual(reality1.getIcecream());
        expect(expected2).toEqual(reality2.getIcecream());
    })
  
    test("If Buttery Butterscotch is selected, it will say so", () => {
        let reality1 = new ButterscotchCupCart()
        let expected1 = getIcecream('Buttery Butterscotch', 'Cup')
        let reality2 = new ButterscotchConeCart()
        let expected2 = getIcecream('Buttery Butterscotch', 'Cone')
        expect(expected1).toEqual(reality1.getIcecream());
        expect(expected2).toEqual(reality2.getIcecream());
    })
  })