"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = __importDefault(require("react-dom"));
exports.simulateClick = function (element) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('click', true, false);
    element.dispatchEvent(event);
};
exports.renderComponent = function (component) {
    var container = document.createElement('div');
    react_dom_1.default.render(component, container);
    document.body.appendChild(container);
    return container;
};
