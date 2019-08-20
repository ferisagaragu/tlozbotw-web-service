"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const server_config_1 = require("../config/server.config");
const secretKey = 'tlozbotw-key';
function ensureToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
}
function auth(urlRest, onAuth) {
    server_config_1.router.post(urlRest, (req, resp) => {
        onAuth(req, resp, jsonwebtoken_1.default, secretKey);
    });
}
exports.auth = auth;
function get(urlRest, onAuth) {
    server_config_1.router.get(urlRest, ensureToken, (req, resp) => {
        jsonwebtoken_1.default.verify(req.token, secretKey, (err, data) => {
            if (err) {
                resp.sendStatus(403);
            }
            else {
                onAuth(req, resp, data);
            }
        });
    });
}
exports.get = get;
function post(urlRest, onAuth) {
    server_config_1.router.post(urlRest, ensureToken, (req, resp) => {
        jsonwebtoken_1.default.verify(req.token, secretKey, (err, data) => {
            if (err) {
                resp.sendStatus(403);
            }
            else {
                onAuth(req, resp, data);
            }
        });
    });
}
exports.post = post;
function put(urlRest, onAuth) {
    server_config_1.router.put(urlRest, ensureToken, (req, resp) => {
        jsonwebtoken_1.default.verify(req.token, secretKey, (err, data) => {
            if (err) {
                resp.sendStatus(403);
            }
            else {
                onAuth(req, resp, data);
            }
        });
    });
}
exports.put = put;
function _delete(urlRest, onAuth) {
    server_config_1.router.delete(urlRest, ensureToken, (req, resp) => {
        jsonwebtoken_1.default.verify(req.token, secretKey, (err, data) => {
            if (err) {
                resp.sendStatus(403);
            }
            else {
                onAuth(req, resp, data);
            }
        });
    });
}
exports._delete = _delete;
//# sourceMappingURL=auth.fuction.js.map