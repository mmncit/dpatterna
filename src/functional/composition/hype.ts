export const ender = (ending: string) => (input: string) => input + ending;

const adore = ender(" rocks");
const announce = ender(", y'all");
const exclaim = ender("!");

const hypeUp = (x: string) => exclaim(announce(adore(x)));
hypeUp("JS"); // "JS rocks, y'all!"
hypeUp("FP"); // "FP rocks, y'all!"
