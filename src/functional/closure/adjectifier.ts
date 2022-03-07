export const makeAdjectifier = (adjective: string) => (noun: string) =>
  adjective + noun;

const coolify = makeAdjectifier("cool ");
console.log(coolify("workshop"));
console.log(coolify("drink"));
