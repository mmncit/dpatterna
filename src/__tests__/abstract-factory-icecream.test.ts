import {ChocoStickCart,ButterscotchStickCart,StrawberryStickCart ,ChocoCupCart ,ButterscotchCupCart ,StrawberryCupCart,
 ChocoConeCart,ButterscotchConeCart ,StrawberryConeCart
  } from "patterns/factory/abstract-factory-icecream";

  const chocoStickIceCreamFactory=new ChocoStickCart();
  const ButterscotchStickhIceCreamFactory=new ButterscotchStickCart();
  const StrawberryStickIceCreamFactory=new StrawberryStickCart();
  const chocoCupIceCreamFactory=new ChocoCupCart();
  const ButterscotchCupIceCreamFactory=new ButterscotchCupCart();
  const StrawberryCupIceCreamFactory=new StrawberryCupCart();
  const chocoConeIceCreamFactory=new ChocoConeCart();
  const ButterscotchConeIceCreamFactory=new ButterscotchConeCart();
  const StrawberryConeIceCreamFactory=new StrawberryConeCart();
  describe("icecream with container", () => {
    it("test choco icecream on a stick", () => {
      expect(chocoStickIceCreamFactory.getIcecream()).toEqual(
        "stick/choco"
      );
    });
  });
  describe("icecream with container", () => {
    it("test choco icecream on a cone", () => {
      expect(chocoConeIceCreamFactory.getIcecream()).toEqual(
        "cone/choco"
      );
    });
  });
  describe("icecream with container", () => {
    it("test choco icecream on a cup", () => {
      expect(chocoCupIceCreamFactory.getIcecream()).toEqual(
        "cup/choco"
      );
    });
  });
  describe("icecream with container", () => {
    it("test Butterscotch icecream on a stick", () => {
      expect(ButterscotchStickhIceCreamFactory.getIcecream()).toEqual(
        "stick/butterscotch"
      );
    });
  });
  describe("icecream with container", () => {
    it("test Butterscotch icecream on a cup", () => {
      expect(ButterscotchCupIceCreamFactory.getIcecream()).toEqual(
        "cup/butterscotch"
      );
    });
  });
  describe("icecream with container", () => {
    it("test Butterscotch icecream on a cone", () => {
      expect(ButterscotchConeIceCreamFactory.getIcecream()).toEqual(
        "cone/butterscotch"
      );
    });
  });
  describe("icecream with container", () => {
    it("test Strawberry icecream on a stick", () => {
      expect(StrawberryStickIceCreamFactory.getIcecream()).toEqual(
        "stick/strawberry"
      );
    });
  });
  describe("icecream with container", () => {
    it("test Strawberry icecream on a cup", () => {
      expect(StrawberryCupIceCreamFactory.getIcecream()).toEqual(
        "cup/strawberry"
      );
    });
  });
  describe("icecream with container", () => {
    it("test Strawberry icecream on a cone", () => {
      expect(StrawberryConeIceCreamFactory.getIcecream()).toEqual(
        "cone/strawberry"
      );
    });
  });
