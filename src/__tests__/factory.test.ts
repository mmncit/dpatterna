import {ChocoCart,StrawberryCart,ButterscotchCart} from "../patterns/factory/factory-icecream";
import {getIcecream} from "../pages/hello-factory/prouct-provider"

describe("Icecream Factory", () => {
    test('Choclate Icecream',()=>{
        let icecream_menu=getIcecream('Choco Blast')
        
        expect(icecream_menu).toEqual("choco")
    })
    test('butterscotch Icecream',()=>{
        let icecream_menu=getIcecream('Buttery Butterscotch')
        expect(icecream_menu).toEqual("butterscotch")
    })
    test('strawberry Icecream',()=>{
        let icecream_menu=getIcecream('Sweety Strawberry')
        expect(icecream_menu).toEqual("strawberry")
    })
})