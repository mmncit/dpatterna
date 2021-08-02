import { BoldDecorator } from "./boldDecorator";
import { ItalicDecorator } from "./italicDecorator";
import { StrikeDecorator } from "./strikeDecorator";
import { UserInput } from "./userInput";

const text1 = new UserInput("Farzana Tabassum");

const deco1 = new BoldDecorator(text1);
console.log("bold word: ");
text1.displayOutput(deco1);

const deco2 = new ItalicDecorator(deco1);
console.log("\n\nbold and italic word: ");
text1.displayOutput(deco2);

const deco3 = new StrikeDecorator(deco2);
console.log("\n\nbold, italic and strike word: ");
text1.displayOutput(deco3);
