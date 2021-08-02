import { Texts } from "./texts";

export class TextDecorator implements Texts {
  userText!: Texts;

  constructor(userText: Texts) {
    this.userText = userText;
  }

  decoration(): any {
    // throw new Error("Method not implemented.");
    return this.userText.decoration();
  }
}
