"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = __importDefault(require("puppeteer"));
var chai_1 = require("chai");
exports.createPuppeteerDriver = function (page) {
    return {
        value: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, page.evaluate(function () { return document.querySelector('.counter .value').textContent; })];
            });
        }); },
        increment: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.click('.counter .increment')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); },
        decrement: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, page.click('.counter .decrement')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }
    };
};
describe('counter', function () {
    var browser;
    var page;
    before(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer_1.default.launch({ headless: false, slowMo: 200 })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    after(function () { return browser.close(); });
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.goto('http://localhost:8080', { waitUntil: 'networkidle2' })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('renders with default value 0', function () { return __awaiter(_this, void 0, void 0, function () {
        var driver, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    driver = exports.createPuppeteerDriver(page);
                    _b = (_a = chai_1.assert).equal;
                    return [4 /*yield*/, driver.value()];
                case 1:
                    _b.apply(_a, [_c.sent(), '0']);
                    return [2 /*return*/];
            }
        });
    }); });
    it('increments the value', function () { return __awaiter(_this, void 0, void 0, function () {
        var driver, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    driver = exports.createPuppeteerDriver(page);
                    return [4 /*yield*/, driver.increment()];
                case 1:
                    _c.sent();
                    _b = (_a = chai_1.assert).equal;
                    return [4 /*yield*/, driver.value()];
                case 2:
                    _b.apply(_a, [_c.sent(), '1']);
                    return [2 /*return*/];
            }
        });
    }); });
    it('decrements the value', function () { return __awaiter(_this, void 0, void 0, function () {
        var driver, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    driver = exports.createPuppeteerDriver(page);
                    return [4 /*yield*/, driver.decrement()];
                case 1:
                    _c.sent();
                    _b = (_a = chai_1.assert).equal;
                    return [4 /*yield*/, driver.value()];
                case 2:
                    _b.apply(_a, [_c.sent(), '-1']);
                    return [2 /*return*/];
            }
        });
    }); });
});
