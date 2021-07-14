"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Fighter3 = exports.Fighter2 = exports.Fighter1 = exports.NoJump = exports.LongJump = exports.ShortJump = exports.Nokick = exports.LightingKick = exports.TornedoKick = exports.Fighter = void 0;
var Fighter = /** @class */ (function () {
    function Fighter(name, kickBehavior, jumpBehavior) {
        this.name = name;
        this.kickBehavior = kickBehavior;
        this.jumpBehavior = jumpBehavior;
    }
    Fighter.prototype.setKickBehavior = function (kickBehavior) {
        this.kickBehavior = kickBehavior;
    };
    Fighter.prototype.setJumpBehavior = function (jumpBehavior) {
        this.jumpBehavior = jumpBehavior;
    };
    Fighter.prototype.display = function () {
        console.log(this.name);
    };
    Fighter.prototype.roll = function () {
        console.log(this.name + ' is rolling');
    };
    Fighter.prototype.kick = function () {
        this.kickBehavior.kick();
    };
    Fighter.prototype.punch = function () {
        console.log(this.name + ' is punching');
    };
    Fighter.prototype.jump = function () {
        this.jumpBehavior.jump();
    };
    return Fighter;
}());
exports.Fighter = Fighter;
var TornedoKick = /** @class */ (function () {
    function TornedoKick() {
    }
    TornedoKick.prototype.kick = function () {
        console.log('is tornedo kikcking');
    };
    return TornedoKick;
}());
exports.TornedoKick = TornedoKick;
var LightingKick = /** @class */ (function () {
    function LightingKick() {
    }
    LightingKick.prototype.kick = function () {
        console.log('is Lighting kikcking');
    };
    return LightingKick;
}());
exports.LightingKick = LightingKick;
var Nokick = /** @class */ (function () {
    function Nokick() {
    }
    Nokick.prototype.kick = function () {
    };
    return Nokick;
}());
exports.Nokick = Nokick;
var ShortJump = /** @class */ (function () {
    function ShortJump() {
    }
    ShortJump.prototype.jump = function () {
        console.log('is short jumping');
    };
    return ShortJump;
}());
exports.ShortJump = ShortJump;
var LongJump = /** @class */ (function () {
    function LongJump() {
    }
    LongJump.prototype.jump = function () {
        console.log('is Long Jumping');
    };
    return LongJump;
}());
exports.LongJump = LongJump;
var NoJump = /** @class */ (function () {
    function NoJump() {
    }
    NoJump.prototype.jump = function () {
    };
    return NoJump;
}());
exports.NoJump = NoJump;
var Fighter1 = /** @class */ (function (_super) {
    __extends(Fighter1, _super);
    function Fighter1(name, kickBehavior, jumpBehavior) {
        return _super.call(this, name, kickBehavior, jumpBehavior) || this;
    }
    return Fighter1;
}(Fighter));
exports.Fighter1 = Fighter1;
var Fighter2 = /** @class */ (function (_super) {
    __extends(Fighter2, _super);
    function Fighter2(name, kickBehavior, jumpBehavior) {
        return _super.call(this, name, kickBehavior, jumpBehavior) || this;
    }
    return Fighter2;
}(Fighter));
exports.Fighter2 = Fighter2;
var Fighter3 = /** @class */ (function (_super) {
    __extends(Fighter3, _super);
    function Fighter3(name, kickBehavior, jumpBehavior) {
        return _super.call(this, name, kickBehavior, jumpBehavior) || this;
    }
    return Fighter3;
}(Fighter));
exports.Fighter3 = Fighter3;
/*
let ryu = new Fighter1("RYU",new TornedoKick,new LongJump);
ryu.setJumpBehavior(new NoJump);
ryu.display();
ryu.kick();
ryu.roll();

let chun_li = new Fighter2("Chun-li",new LightingKick,new ShortJump);
chun_li.setKickBehavior(new Nokick);
chun_li.display();
chun_li.kick();

let mostofa= new Fighter3("Mostofa",new TornedoKick,new ShortJump)
    mostofa.display()
    mostofa.punch();
    mostofa.kick();
    mostofa.jump();
*/ 
