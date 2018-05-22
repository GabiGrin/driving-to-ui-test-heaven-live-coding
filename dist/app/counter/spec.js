"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var chai_1 = require("chai");
var _1 = require(".");
var test_utils_1 = require("../test-utils");
var createDriver = function (element) {
    return {
        value: function () {
            var rawValue = element.querySelector('.value').textContent;
            return parseInt(rawValue);
        },
        increment: function () {
            var incBtn = element.querySelector('.increment');
            test_utils_1.simulateClick(incBtn);
        },
        decrement: function () {
            var decBtn = element.querySelector('.decrement');
            test_utils_1.simulateClick(decBtn);
        }
    };
};
describe('counter', function () {
    it('shows 0 as default value', function () {
        var element = test_utils_1.renderComponent(React.createElement(_1.Counter, null));
        var driver = createDriver(element);
        chai_1.assert.equal(driver.value(), 0);
    });
    it('increments value', function () {
        var element = test_utils_1.renderComponent(React.createElement(_1.Counter, null));
        var driver = createDriver(element);
        driver.increment();
        chai_1.assert.equal(driver.value(), 1);
    });
    it('decrements value', function () {
        var element = test_utils_1.renderComponent(React.createElement(_1.Counter, null));
        var driver = createDriver(element);
        driver.decrement();
        chai_1.assert.equal(driver.value(), -1);
    });
    it('shows initial value', function () {
        var element = test_utils_1.renderComponent(React.createElement(_1.Counter, { initialValue: 7 }));
        var driver = createDriver(element);
        chai_1.assert.equal(driver.value(), 7);
    });
});
