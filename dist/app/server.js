"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.static('dist'));
app.get('/', function (_, res) {
    var template = "\n\t<style>\n\t\t#root {\n\t\t\tmargin: 0 auto;\n\t\t\twidth: 800px;\n\t\t}\n\t\t.counter {\n\t\t\tfont-size: 30px;\n\t\t\tdisplay: flex;\n\t\t\tmax-width: 400px;\n\t\t\tflex-align: center;\n\t\t}\n\t\t.counter button {\n\t\t\tflex: 0;\n\t\t\tmargin: 20px;\n\t\t\tfont-size: 30px;\n\t\t\tborder-radius: 41px;\n\t\t\theight: 50px;\n\t\t\twidth: 50px;\n\t\t}\n\n\t\t.counter .value {\n\t\t\tflex: 1;\n\t\t\tfont-size: 50px;\n\t\t\tfont-weight: 500;\n\t\t}\n\t</style>\n\t<body>\n\t\t<div id=\"root\"></div>\n\t</body>\n\t<script src=\"bundle.js\"></script>\n\t";
    res.send(template);
});
app.listen(8080);
