"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDecorator = void 0;
var TextDecorator = /** @class */ (function () {
    function TextDecorator(userText) {
        this.userText = userText;
    }
    TextDecorator.prototype.decoration = function () {
        // throw new Error("Method not implemented.");
        return this.userText.decoration();
    };
    return TextDecorator;
}());
exports.TextDecorator = TextDecorator;
