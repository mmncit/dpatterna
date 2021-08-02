"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInput = void 0;
var UserInput = /** @class */ (function () {
    function UserInput(input) {
        this.input = input;
    }
    UserInput.prototype.decoration = function () {
        // throw new Error("Method not implemented.");
        return this.input;
    };
    UserInput.prototype.displayOutput = function (x) {
        console.log("Decorated Text: ", x.decoration());
    };
    return UserInput;
}());
exports.UserInput = UserInput;
