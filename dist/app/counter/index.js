"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: _this.props.initialValue || 0
        };
        _this.increment = function () { return _this.setState({ value: _this.state.value + 1 }); };
        _this.decrement = function () { return _this.setState({ value: _this.state.value - 1 }); };
        return _this;
    }
    Counter.prototype.render = function () {
        return (React.createElement("div", { className: 'counter' },
            React.createElement("button", { onClick: this.decrement, className: 'decrement' }, "-"),
            React.createElement("span", { className: 'value' }, this.state.value),
            React.createElement("button", { onClick: this.increment, className: 'increment' }, "+")));
    };
    return Counter;
}(React.Component));
exports.Counter = Counter;
