import {ChococupCart,StrawberryStickCart,} from "../patterns/factory/abstract-factory-icecream";
import {getIcecream} from "../pages/hello-factory/abstract-product-provider"

describe("Icecream Factory", () => {
    test('Choclate cup Icecream',()=>{
        let icecream_menu=getIcecream('Choco Blast')
        
        expect(icecream_menu).toEqual("choco")
    })
    test('butterscotch cone Icecream',()=>{
        let icecream_menu=getIcecream('Buttery Butterscotch')
        expect(icecream_menu).toEqual("butterscotch")
    })
    test('strawberry stick Icecream',()=>{
        let icecream_menu=getIcecream('Sweety Strawberry')
        expect(icecream_menu).toEqual("strawberry")
    })
})