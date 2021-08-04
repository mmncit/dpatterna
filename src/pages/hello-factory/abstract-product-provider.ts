import {
    ChocoConeCart,
    ChocoCupCart,
    ChocoStickCart,
    StrawberryStickCart,
    StrawberryConeCart,
    StrawberryCupCart,
    ButterscotchConeCart,
    ButterscotchCupCart,
    ButterscotchStickCart,
  } from "patterns/factory/abstract-factory-icecream";
  
  function orderHandler(selected: string) {
    switch (selected) {
      case "Choco cup Blast":
        return new ChocoCupCart();
        break;
        case "Choco cone Blast":
        return new ChocoConeCart();
        break;
        case "Choco stick Blast":
        return new ChocoStickCart();
        break;
      case "Sweety cup Strawberry":
        return new StrawberryCupCart();
        break;
        case "Sweety cone Strawberry":
        return new StrawberryConeCart();
        break;
        case "Sweety stick Strawberry":
        return new StrawberryStickCart();
        break;
      case "Buttery cup Butterscotch":
        return new ButterscotchCupCart();
        break;
        case "Buttery cone Butterscotch":
        return new ButterscotchConeCart();
        break;
        case "Buttery stick Butterscotch":
        return new ButterscotchStickCart();
        break;
      default:
      // code block
    }
  }
  
  export function getIcecream(selected: string) {
    const iceCreamFactory = orderHandler(selected);
    if (iceCreamFactory) {
      console.log(iceCreamFactory.getIcecream());
      return iceCreamFactory.getIcecream();
    }
  }
  