// creator has multiple concrete creators
// concrete creators produce concrete products
// concrete products are implemented from product

// product1 interface
interface Icecream {
  get(): string; // return the flavor of icecream
}

// concrete product
class ChocoIcecream implements Icecream {
  public get() {
    return "choco";
  }
}
class ButterscotchIcecream implements Icecream {
  public get() {
    return "butterscotch";
  }
}
class StrawberryIcecream implements Icecream {
  public get() {
    return "strawberry";
  }
}

// product2 interface
interface IcecreamContainer {
  getContainedIcecream(icecream: Icecream): string;
}

// concrete product2
class StickContainer implements IcecreamContainer {
  getContainedIcecream(icecream: Icecream): string {
    console.log(`stick/${icecream.get()}`);
    return `stick/${icecream.get()}`;
  }
}

class CupContainer implements IcecreamContainer {
  getContainedIcecream(icecream: Icecream): string {
    return `cup/${icecream.get()}`;
  }
}

class ConeContainer implements IcecreamContainer {
  getContainedIcecream(icecream: Icecream): string {
    return `cone/${icecream.get()}`;
  }
}

// abstract factory
abstract class IceCreamFactory {
  public abstract getIcecreamFromfactory(): Icecream;
  public abstract getContainerfromfactory(): IcecreamContainer;
  public getIcecream() {
    const icecream = this.getIcecreamFromfactory();
    const container = this.getContainerfromfactory();
    return container.getContainedIcecream(icecream);
  }
}

// concrete creators/factories
export class ChocoStickCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new ChocoIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new StickContainer();
  }
}

export class ButterscotchStickCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new ButterscotchIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new StickContainer();
  }
}

export class StrawberryStickCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new StrawberryIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new StickContainer();
  }
}

export class ChocoCupCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new ChocoIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new CupContainer();
  }
}

export class ButterscotchCupCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new ButterscotchIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new CupContainer();
  }
}

export class StrawberryCupCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new StrawberryIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new CupContainer();
  }
}

export class ChocoConeCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new ChocoIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new ConeContainer();
  }
}

export class ButterscotchConeCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new ButterscotchIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new ConeContainer();
  }
}

export class StrawberryConeCart extends IceCreamFactory {
  public getIcecreamFromfactory(): Icecream {
    return new StrawberryIcecream();
  }
  public getContainerfromfactory(): IcecreamContainer {
    return new ConeContainer();
  }
}
