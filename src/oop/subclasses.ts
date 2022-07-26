import { createUser, NewUser, userFunctionStore } from "./prototype";

interface PaidUser extends NewUser {
  accountBalance: number;
}

const paidUserFunctions = {
  increaseBalance: function () {
    (this as unknown as PaidUser).accountBalance++;
  },
};

export function paidUserCreator(
  paidName: string,
  paidScore: number,
  accountBalance: number
) {
  const newPaidUser = createUser(paidName, paidScore);

  Object.setPrototypeOf(newPaidUser, paidUserFunctions); // set the __proto__ of newPaidUser to paidUserFunctions !!! confusing name for a function :@
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

Object.setPrototypeOf(paidUserFunctions, userFunctionStore);
