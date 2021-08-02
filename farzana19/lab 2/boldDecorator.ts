import { TextDecorator } from "./textDecorator";

export class BoldDecorator extends TextDecorator {
  decoration(): string {
    return super.decoration().bold();
  }
}
