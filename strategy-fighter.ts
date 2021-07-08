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
    console.log(`is rolling`);
  }
  punch() {
    console.log(`is punching`);
  }
  kick() {
    // console.log(`is kicking`);
    this.kickBehavior.kick();
  }
  jump() {
    console.log(`is jumping`);
  }
}

interface KickBehavior {
  kick(): void;
}

// concrete strategy
class TornadoKick implements KickBehavior {
  kick() {
    console.log(`is tornado kicking with full force`);
  }
}

class LightningKick implements KickBehavior {
  kick() {
    console.log(`is lightning kicking`);
  }
}

class NoKick implements KickBehavior {
  kick() {}
}

// Fighter1 and Fighter3 both of them use Tornado kick

class Fighter1 extends Fighter {
  constructor(name: string) {
    super(name, new TornadoKick());
  }
}

class Fighter2 extends Fighter {
  constructor(name: string, kickBehavior: KickBehavior) {
    super(name, kickBehavior);
  }
}

class Fighter3 extends Fighter {
  constructor(name: string) {
    super(name, new TornadoKick());
  }
}

// runtime
let mustapha: Fighter = new Fighter1("Mustapha");
mustapha.display();
mustapha.kick();
let hannah: Fighter = new Fighter3("Hannah");
hannah.display();
hannah.kick();

let jack: Fighter = new Fighter2("Jack", new NoKick());
jack.display();
jack.kick();
