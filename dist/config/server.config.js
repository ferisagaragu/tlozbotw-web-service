"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
exports.router = express_1.default();
_a = process.env.PORT, exports.PORT = _a === void 0 ? 3400 : _a;
exports.server = http_1.default.createServer(exports.router);
exports.router.use(morgan_1.default('dev'));
exports.router.use(body_parser_1.default.json());
exports.router.use(body_parser_1.default.urlencoded({ extended: true }));
//# sourceMappingURL=server.config.js.map