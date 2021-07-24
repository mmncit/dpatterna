import CryptoJS from "crypto-js";

// component
interface Encoder {
  encode(raw: any): any;
  decode(code: any): any;
}

// concrete component
export class StringEncoder implements Encoder {
  public encode(raw: string): string {
    return raw;
  }
  public decode(encoded: string): string {
    return encoded;
  }
}

// decorator
export abstract class EncoderDecorator implements Encoder {
  private decoratorEncoder: Encoder;

  constructor(decoratorEncoder: Encoder) {
    this.decoratorEncoder = decoratorEncoder;
  }

  encode(raw: any) {
    return this.decoratorEncoder.encode(raw);
  }
  decode(code: any) {
    return this.decoratorEncoder.decode(code);
  }
}

// concrete decorators
export class CryptoEncoder extends EncoderDecorator {
  constructor(encoder: Encoder) {
    super(encoder);
  }

  encode(input: string): string {
    return super.encode(CryptoJS.AES.encrypt(input, "CSE4502").toString());
  }

  decode(encodedText: string): string {
    const bytes = CryptoJS.AES.decrypt(encodedText, "CSE4502");
    return super.decode(bytes.toString(CryptoJS.enc.Utf8));
  }
}

export class RunLengthEncoder extends EncoderDecorator {
  constructor(encoder: Encoder) {
    super(encoder);
  }
  encode(input: string): string {
    return super.encode(
      input.replace(
        /(.)\1+/g,
        (capture) => (capture.length > 1 ? capture.length : "") + capture[0]
      )
    );
  }
  decode(input: string): string {
    return super.decode(
      input.replace(/([0-9]+)(.)/g, (_match, count, char) =>
        char.repeat(Number(count))
      )
    );
  }
}
