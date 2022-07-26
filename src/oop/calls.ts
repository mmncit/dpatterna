import { UserCreator } from "./prototype";

export function PaidUserCreator(
  this: any,
  paidName: string,
  paidScore: number,
  accountBalance: number
) {
  // in local memory "this" refers to the old "this"
  // this: old "this"

  UserCreator.call(this, paidName, paidScore);
  // createUser.apply(this, [paidName, paidScore]);
  this.accountBalance = accountBalance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);

PaidUserCreator.prototype.increaseBalance = function () {
  this.accountBalance++;
};
