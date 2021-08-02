import {
    StrawberryStickCart,
    StrawberryCupCart,
    StrawberryConeCart,
    ButterscotchStickCart,
    ButterscotchCupCart,
    ButterscotchConeCart,
    ChocoStickCart,
    ChocoCupCart,
    ChocoConeCart,
} from "../patterns/factory/abstract-factory-icecream";
import { getIcecream } from "../pages/hello-abstract-factory/prouct-provider";

describe("TestingAbstructFactoryIcecream", () => {
    test("StrawberryStickTest", () => {
        let here = getIcecream("Sweety Strawberry", "Stick");
        let getting = new StrawberryStickCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("StrawberryCupTest", () => {
        let here = getIcecream("Sweety Strawberry", "Cup");
        let getting = new StrawberryCupCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("StrawberryConeTest", () => {
        let here = getIcecream("Sweety Strawberry", "Cone");
        let getting = new StrawberryConeCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("ButterscotchStickTest", () => {
        let here = getIcecream("Buttery Butterscotch", "Stick");
        let getting = new ButterscotchStickCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("ButtescotchCupTest", () => {
        let here = getIcecream("Buttery Butterscotch", "Cup");
        let getting = new ButterscotchCupCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("ButtescotchConeTest", () => {
        let here = getIcecream("Buttery Butterscotch", "Cone");
        let getting = new ButterscotchConeCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("ChocoStickTest", () => {
        let here = getIcecream("Choco Blast", "Stick");
        let getting = new ChocoStickCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("ChocoCupTest", () => {
        let here = getIcecream("Choco Blast", "Cup");
        let getting = new ChocoCupCart();
        expect(here).toEqual(getting.getIcecream());
    });

    test("ChocoConeTest", () => {
        let here = getIcecream("Choco Blast", "Cone");
        let getting = new ChocoConeCart();
        expect(here).toEqual(getting.getIcecream());
    });
});
