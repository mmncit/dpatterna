export class Fighter{
    private name: string;
    kickBehavior: KickBehavior;
    jumpBehavior: JumpBehavior;
    constructor(name: string,kickBehavior: KickBehavior,jumpBehavior: JumpBehavior){
        this.name=name;
        this.kickBehavior=kickBehavior;
        this.jumpBehavior=jumpBehavior;
    }
setKickBehavior(kickBehavior: KickBehavior){
this.kickBehavior=kickBehavior;
}
setJumpBehavior(jumpBehavior: JumpBehavior){
this.jumpBehavior=jumpBehavior;
}
display(){
    console.log(this.name);
}
roll(){
    console.log(this.name + ' is rolling');
}
kick(){
    this.kickBehavior.kick();
}
punch(){
    console.log(this.name + ' is punching');
}
jump(){
    this.jumpBehavior.jump();
}

}

export interface KickBehavior{
    kick(): void;
}

export class TornedoKick implements KickBehavior{
    kick(): void{
        console.log('is tornedo kikcking');
    }
}
export class LightingKick implements KickBehavior{
    kick(): void{
        console.log('is Lighting kikcking');
    }
}
export class Nokick implements KickBehavior{
    kick(): void{
    }
}



export interface JumpBehavior{
    jump(): void;
}

export class ShortJump implements JumpBehavior{
    jump(): void{
        console.log('is short jumping');
    }
}
export class LongJump implements JumpBehavior{
    jump(): void{
        console.log('is Long Jumping');
    }
}
export class NoJump implements JumpBehavior{
    jump(): void{
    }
}


export class Fighter1 extends Fighter{
    constructor(name: string,kickBehavior: KickBehavior,jumpBehavior: JumpBehavior){
        super(name,kickBehavior,jumpBehavior);
    }

}

export class Fighter2 extends Fighter{
    constructor(name: string,kickBehavior: KickBehavior,jumpBehavior: JumpBehavior){
        super(name,kickBehavior,jumpBehavior);
    }
}

export class Fighter3 extends Fighter{
    constructor(name: string,kickBehavior: KickBehavior,jumpBehavior: JumpBehavior){
        super(name,kickBehavior,jumpBehavior);
    }
     
}

/*
let ryu = new Fighter1("RYU",new TornedoKick,new LongJump);
ryu.setJumpBehavior(new NoJump);
ryu.display();
ryu.kick();
ryu.roll();

let chun_li = new Fighter2("Chun-li",new LightingKick,new ShortJump);
chun_li.setKickBehavior(new Nokick);
chun_li.display();
chun_li.kick();

let mostofa= new Fighter3("Mostofa",new TornedoKick,new ShortJump)
    mostofa.display()
    mostofa.punch();
    mostofa.kick();
    mostofa.jump();
*/