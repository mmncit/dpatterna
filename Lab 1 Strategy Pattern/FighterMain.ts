import {
    Fighter,
    TornedoKick,
    LightingKick,
    Nokick,
    LongJump,
    ShortJump,
    NoJump,
    Fighter1,
    Fighter2,
    Fighter3,
    KickBehavior,
    JumpBehavior,
  } from "./Strategy_StreetFighter";

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