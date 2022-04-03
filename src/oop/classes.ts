export class User {
  // class is syntactic sugar in js :@
  name: string;
  score: number;
  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
  // put the functions into prototype
  increment() {
    this.score++;
  }
  login() {
    console.log("login");
  }
}
