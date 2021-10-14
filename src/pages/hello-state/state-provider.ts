export function getState(message: string) {
  switch (message) {
    case "enter":
      return "open";

    case "payOk":
      return "open";

    case "payFailed":
      return "closed";
    default:
      return "processing";
  }
}
