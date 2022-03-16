export function greet(greeting: string, name: string) {
  return `${greeting}, ${name}!`;
}

export function curryGreet(greeting: string) {
  return function (name: string) {
    return `${greeting}, ${name}!`;
  };
}

const italianGreet = curryGreet("Ciao");

console.log(italianGreet("Alonzo"));

const texasGreet = curryGreet("Howdy");

console.log(texasGreet("Alonzo"));
