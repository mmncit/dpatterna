import {ChocoCupCart,StrawberryStickCart,ButterscotchConeCart} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-factory/abstract-product-provider"

describe("Icecream Factory", () => {
    test('Choclate cup Icecream',()=>{
        let icecream_menu=getIcecream('Choco cup Blast')
        
        expect(icecream_menu).toEqual("cup/choco")
    })
    test('butterscotch cone Icecream',()=>{
        let icecream_menu=getIcecream('Buttery cone Butterscotch')
        expect(icecream_menu).toEqual("cone/butterscotch")
    })
    test('strawberry stick Icecream',()=>{
        let icecream_menu=getIcecream('Sweety stick Strawberry')
        expect(icecream_menu).toEqual("stick/strawberry")
    })
})