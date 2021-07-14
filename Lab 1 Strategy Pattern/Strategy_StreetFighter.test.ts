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

  } from "./Strategy_StreetFighter";

  describe("Fighter fighter1", () => {
    let ryu = new Fighter1("RYU",new TornedoKick,new LongJump);
    it("Fighter 1 Ryu ", () => {
        expect(ryu.display().toEqual("RYU");
      });
      it("Fighter 1 Ryu tornedo kicks ", () => {
        expect(ryu.kick.toEqual("is Tornedo Kicks");
      });

  });