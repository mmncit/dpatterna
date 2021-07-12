export class Fighter {
  private name: string;
  kickBehavior: KickBehavior;

  constructor(name: string, kickBehavior: KickBehavior) {
    this.name = name;
    this.kickBehavior = kickBehavior;
  }
  setKickBehavior(kickBehavior: KickBehavior) {
    this.kickBehavior = kickBehavior;
  }

  display() {
    console.log(`${this.name} is diplaying`);
  }
  roll() {
    return `is rolling`;
  }
  punch() {
    return `is punching`;
  }

  /**
   * the Context delegates some work to the strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  kick() {
    return this.kickBehavior.kick();
  }
  jump() {
    return `is jumping`;
  }
}

interface KickBehavior {
  kick(): void;
}

// concrete strategy
class TornadoKick implements KickBehavior {
  kick() {
    return `is tornado kicking with full force`;
  }
}

class LightningKick implements KickBehavior {
  kick() {
    return `is lightning kicking`;
  }
}

export class NoKick implements KickBehavior {
  kick() {
    return;
  }
}

// Fighter1 and Fighter3 both of them use Tornado kick

export class Fighter1 extends Fighter {
  constructor(name: string) {
    super(name, new TornadoKick());
  }
}

export class Fighter2 extends Fighter {
  constructor(name: string, kickBehavior: KickBehavior) {
    super(name, kickBehavior);
  }
}

export class Fighter3 extends Fighter {
  constructor(name: string) {
    super(name, new TornadoKick());
  }
}

/*
// runtime
let mustapha: Fighter = new Fighter1("Mustapha");
console.log(mustapha.kick());

let hannah: Fighter = new Fighter3("Hannah");
console.log(hannah.kick());

let jack: Fighter = new Fighter2("Jack", new NoKick());
console.log(jack.kick());
*/
