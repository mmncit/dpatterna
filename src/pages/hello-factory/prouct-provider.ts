import {
  ChocoCart,
  StrawberryCart,
  ButterscotchCart,
} from "patterns/factory/factory-icecream";

function orderHandler(selected: string) {
  switch (selected) {
    case "Choco Blast":
      return new ChocoCart();
      break;
    case "Sweety Strawberry":
      return new StrawberryCart();
      break;
    case "Buttery Butterscotch":
      return new ButterscotchCart();
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
