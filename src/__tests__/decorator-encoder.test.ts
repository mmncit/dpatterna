import {
  CryptoEncoder,
  EncoderDecorator,
  RunLengthEncoder,
  StringEncoder,
} from "patterns/decorator/decorator-encoder";

describe("decorator encoder", () => {
  test("encrypt followed by compression gives original string when decompression followed by decrypting", () => {
    // create a encoder = crypto -> rle
    let encoder = new StringEncoder();
    encoder = new CryptoEncoder(encoder);
    encoder = new RunLengthEncoder(encoder);
    // create a decoder = rle -> crypto
    let decoder = new StringEncoder();
    decoder = new RunLengthEncoder(decoder);
    decoder = new CryptoEncoder(decoder);

    expect(decoder.decode(encoder.encode("Hello, World!"))).toEqual(
      "Hello, World!"
    );
  });
});
