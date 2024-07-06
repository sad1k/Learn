var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Kettle = /** @class */ (function () {
    function Kettle(volume, power) {
        this.volume = volume;
        this.targetTemperature = 100;
        this.timerId = null;
        this.currentTemperature = 10;
        this.currentWater = 0;
        this.dirtyness = 0;
        this.isBroken = false;
    }
    Kettle.prototype.startHeating = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            if (!_this.isBroken) {
                console.log("Starting to heat water to ".concat(_this.targetTemperature, "\u00B0C. from ").concat(_this.currentTemperature));
                if (!_this.timerId) {
                    _this.timerId = setInterval(function () { return _this.heat(res, rej); }, 1000);
                }
            }
            else {
                console.log("You need to repair the kettle");
            }
        });
    };
    Kettle.prototype.heat = function (res, rej) {
        if (this.dirtyness >= 10) {
            if (this.timerId)
                clearInterval(this.timerId);
            this.isBroken = true;
            console.log("Your kettle is broken");
        }
        else {
            this.dirtyness += 1;
            this.currentTemperature += 10;
            console.log("Water is heater for 10°C");
            if (this.currentTemperature >= this.targetTemperature) {
                this.stopHeating();
                res('stop heating');
            }
        }
    };
    Kettle.prototype.cooling = function () {
        var _this = this;
        console.log("Your water's starting to get cold");
        this.timerId = setInterval(function () {
            if (_this.currentTemperature <= 20 && _this.timerId) {
                clearInterval(_this.timerId);
                _this.timerId = null;
            }
            else {
                _this.currentTemperature -= 10;
                console.log("the water has cooled by 10°C");
            }
        }, 100);
    };
    Kettle.prototype.stopHeating = function () {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
            console.log("Stop to heat water, time to drink tea!");
        }
        else {
            console.log("You can't stop heat water before start");
        }
    };
    Kettle.prototype.fillWater = function (amount) {
        if (this.currentWater + amount <= this.volume) {
            this.currentWater += amount;
            console.log("Water filled for ".concat(amount));
        }
        else {
            console.log("You spilled water");
        }
    };
    return Kettle;
}());
var Repairer = /** @class */ (function () {
    function Repairer(options) {
        this.options = options;
    }
    Repairer.prototype.fix = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.options.some(function (Product) { return item instanceof Product; }) &&
                    "dirtyness" in item) {
                    item.dirtyness = 0;
                    console.log("Your item fixed");
                }
                else {
                    console.log("Your item can't be fixed");
                }
                return [2 /*return*/];
            });
        });
    };
    return Repairer;
}());
var kettle = new Kettle(1000, 200);
var repair = new Repairer([Kettle]);
kettle.startHeating().then(function (val) {
    repair.fix(kettle);
});
