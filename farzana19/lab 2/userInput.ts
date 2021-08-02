import { Texts } from "./texts";

export class UserInput implements Texts {
  input!: string;

  constructor(input: string) {
    this.input = input;
  }
  decoration(): string {
    // throw new Error("Method not implemented.");
    return this.input;
  }
  displayOutput(x: Texts): void {
    console.log("Decorated Text: ", x.decoration());
  }
}
