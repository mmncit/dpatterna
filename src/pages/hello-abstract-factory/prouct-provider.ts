import {
  ButterscotchCupCart,
  ButterscotchStickCart,
  ButterscotchConeCart,
  ChocoCupCart,
  ChocoStickCart,
  ChocoConeCart,
  StrawberryCupCart,
  StrawberryStickCart,
  StrawberryConeCart,

} from "patterns/factory/abstract-factory-icecream";

function orderHandler(selectedMenu: string, selectedContainer: string) {
  const combinedOrder = `${selectedMenu} on ${selectedContainer}`;
  console.log({ combinedOrder });
  switch (combinedOrder) {
    case "Choco Blast on Stick":
      return new ChocoStickCart();
      break;
    case "Sweety Strawberry on Stick":
      return new StrawberryStickCart();
      break;
    case "Buttery Butterscotch on Stick":
      return new ButterscotchStickCart();
      break;
    case "Choco Blast on Cup":
      return new ChocoCupCart();
      break;
    case "Sweety Strawberry on Cup":
      return new StrawberryCupCart();
      break;
    case "Buttery Butterscotch on Cup":
      return new ButterscotchCupCart();
      break;
    case "Choco Blast on Cone":
      return new ChocoConeCart();
      break;
    case "Sweety Strawberry on Cone":
      return new StrawberryConeCart();
      break;
    case "Buttery Butterscotch on Cone":
      return new ButterscotchConeCart();
      break;
    default:
    // code block
  }
}

export function getIcecream(selected: string, selectedContainer: string) {
  const iceCreamFactory = orderHandler(selected, selectedContainer);
  if (iceCreamFactory) {
    return iceCreamFactory.getIcecream();
  }
}
