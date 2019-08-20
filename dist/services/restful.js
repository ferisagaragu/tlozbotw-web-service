"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_rest_1 = __importDefault(require("./login.rest"));
const loginRest = new login_rest_1.default();
function init() {
    //LOGIN
    loginRest.login();
}
exports.init = init;
//# sourceMappingURL=restful.js.map