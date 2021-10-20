export class Fighter {
  private name: string;
  kickBehavior: KickBehavior;
  jumpBehaviour: JumpBehaviour;

  constructor(name: string, kickBehavior: KickBehavior,jumpBehaviour: JumpBehaviour) {
    this.name = name;
    this.kickBehavior = kickBehavior;
    this.jumpBehaviour=jumpBehaviour;
  }
  setKickBehavior(kickBehavior: KickBehavior) {
    this.kickBehavior = kickBehavior;
  }
  setJumpBehavior(jumpBehaviour: JumpBehaviour) {
    this.jumpBehaviour=jumpBehaviour;
  }
  

  display() {
    // console.log(`${this.name} is diplaying`);
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
    return this.jumpBehaviour.jump();
  }
}

interface KickBehavior {
  kick(): void;
}

interface JumpBehaviour{
  jump(): void;
}


// concrete strategy for kicks
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

// concrete strategy for jumps
class ShortJump implements JumpBehaviour {
  jump() {
    return `is short jumping`;
  }
}

class LongJump implements JumpBehaviour {
  jump() {
    return `is long jumping`;
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
    super(name, new TornadoKick(),new ShortJump());
  }
}

//export class Fighter2 extends Fighter {
//  constructor(name: string, kickBehavior: KickBehavior) {
//    super(name, new kickBehavior,jumpBehaviour);
//  }
//}

export class Fighter3 extends Fighter {
  constructor(name: string) {
    super(name, new TornadoKick(),new LongJump());
  }
}


// runtime
let mustapha: Fighter = new Fighter1("Mustapha");
console.log(mustapha.jump());

let hannah: Fighter = new Fighter3("Hannah");
console.log(hannah.jump());

//let jack: Fighter = new Fighter2("Jack", new NoKick());
//console.log(jack.kick());
