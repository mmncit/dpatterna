import { TextDecorator } from "./textDecorator";

export class StrikeDecorator extends TextDecorator {
  decoration(): string {
    return super.decoration().strike();
  }
}
