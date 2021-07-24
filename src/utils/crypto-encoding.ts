import CryptoJS from "crypto-js";

export default class CryptoEncoding {
  // encode input
  static encode(input: string): string {
    return CryptoJS.AES.encrypt(input, "CSE4502").toString();
  }

  // decode encoded message to original text
  static decode(encodedText: string): string {
    const bytes = CryptoJS.AES.decrypt(encodedText, "CSE4502");
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
