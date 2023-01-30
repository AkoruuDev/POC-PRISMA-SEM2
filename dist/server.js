"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var server = (0, express_1["default"])();
server.use(express_1["default"].json());
dotenv_1["default"].config();
var port = process.env.PORT || 5000;
server.listen(port, function () {
    console.log("Server running on ".concat(port));
});
