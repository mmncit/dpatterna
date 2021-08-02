import { TextDecorator } from "./textDecorator";

export class ItalicDecorator extends TextDecorator {
  decoration(): string {
    return super.decoration().italics();
  }
}
