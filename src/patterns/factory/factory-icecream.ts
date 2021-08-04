// creator has multiple concrete creators
// concrete creators produce concrete products
// concrete products are implemented from product

// product interface
export interface Icecream {
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

// abstract factory
export abstract class IcecreamFactory {
  public abstract factoryMethod(): Icecream;
  public getIcecream() {
    const icecream = this.factoryMethod();
    return icecream.get();
  }
}

// concrete creators
export class ChocoCart extends IcecreamFactory {
  public factoryMethod(): Icecream {
    return new ChocoIcecream();
  }
}

export class ButterscotchCart extends IcecreamFactory {
  public factoryMethod(): Icecream {
    return new ButterscotchIcecream();
  }
}

export class StrawberryCart extends IcecreamFactory {
  public factoryMethod(): Icecream {
    return new StrawberryIcecream();
  }
}