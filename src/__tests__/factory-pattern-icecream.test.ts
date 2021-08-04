import {ChocoCart,ButterscotchCart,StrawberryCart} from "../patterns/factory/factory-icecream";
import {getIcecream} from "../pages/hello-factory/prouct-provider"

describe("Icecream Factory Test", () => {
    test('Choclate Icecream',()=>{
        let expectation=getIcecream('Choco Blast')
        let reality=new ChocoCart()
        expect(expectation).toEqual(reality.getIcecream())
    })
    test('Butterscotch Icecream',()=>{
        let expectation=getIcecream('Buttery Butterscotch')
        let reality=new ButterscotchCart()
        expect(expectation).toEqual(reality.getIcecream())
    })
    test('Strawberry Ice cream',()=>{
        let expectation=getIcecream('Sweety Strawberry')
        let reality=new StrawberryCart()
        expect(expectation).toEqual(reality.getIcecream())
    })
})