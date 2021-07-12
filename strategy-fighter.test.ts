import {
  Fighter,
  Fighter1,
  Fighter2,
  Fighter3,
  NoKick,
} from "./strategy-fighter";

describe("Fighter context", () => {
  it("Fighter1 and Fighter3 both of them should use Tornado kick", () => {
    const tornaKickStatus = `is tornado kicking with full force`;
    let mustapha: Fighter = new Fighter1("Mustapha");
    expect(mustapha.kick()).toEqual(tornaKickStatus);
    let hannah: Fighter = new Fighter3("Hannah");
    expect(hannah.kick()).toEqual(tornaKickStatus);
  });

  it("If NoKick is passed as behavior, fighter should not kick", () => {
    let jack: Fighter = new Fighter2("Jack", new NoKick());
    expect(jack.kick()).toBeUndefined();
  });
});
