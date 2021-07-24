// theopomies's solution to Run Length Encoding
export default class RunLengthEncoding {
  static encode(input: string): string {
    return input.replace(
      /(.)\1+/g,
      (capture) => (capture.length > 1 ? capture.length : "") + capture[0]
    );
  }
  static decode(input: string): string {
    return input.replace(/([0-9]+)(.)/g, (_match, count, char) =>
      char.repeat(Number(count))
    );
  }
}
