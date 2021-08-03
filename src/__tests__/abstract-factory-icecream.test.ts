import {
  ChocoCupCart,
  StrawberryStickCart,
  ButterscotchConeCart,
} from '../patterns/factory/abstract-factory-icecream'
import { getIcecream } from '../pages/hello-abstract-factory/prouct-provider'

describe('Abstract factory icecream test', () => {
  test('Choco icecream on Cup test', () => {
    let expected = getIcecream('Choco Blast', 'Cup')
    let reality = new ChocoCupCart()
    expect(expected).toEqual(reality.getIcecream())
  })

  test('Strawberry icecream on stick test', () => {
    let expected = getIcecream('Sweety Strawberry', 'Stick')
    let reality = new StrawberryStickCart()
    expect(expected).toEqual(reality.getIcecream())
  })

  test('Butterscotch icecream on Cone test', () => {
    let expected = getIcecream('Buttery Butterscotch', 'Cone')
    let reality = new ButterscotchConeCart()
    expect(expected).toEqual(reality.getIcecream())
  })
})
