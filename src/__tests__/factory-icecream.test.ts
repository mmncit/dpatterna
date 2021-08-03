import {
  ChocoCart,
  ButterscotchCart,
  StrawberryCart
} from "patterns/factory/factory-icecream";
import {getIcecream} from '../pages/hello-factory/prouct-provider'

describe("icecream factory", () => {
  test("If Choco Blast is selected, it will say so", () => {
    let reality = new ChocoCart()
    let expected = getIcecream('Choco Blast')
    expect(expected).toEqual(reality.getIcecream());
  })

  test("If Sweety Strawberry is selected, it will say so", () => {
    let reality = new StrawberryCart()
    let expected = getIcecream('Sweety Strawberry')
    expect(expected).toEqual(reality.getIcecream());
  })

  test("If Buttery Butterscotch is selected, it will say so", () => {
    let reality = new ButterscotchCart()
    let expected = getIcecream('Buttery Butterscotch')
    expect(expected).toEqual(reality.getIcecream());
  })
})