"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseCreator {
    constructor() {
        this.messageDefault = 'Upps hubo un problema al procesar la información';
    }
    //SERVER ERROR
    _500(resp, error, message) {
        resp.status(500);
        resp.send({
            code: error,
            message: message ? message : this.messageDefault
        });
    }
    //SUCCESS
    _200(resp, data, length, message) {
        resp.status(200);
        if (length == 0) {
            resp.send({
                message,
                data
            });
        }
        else {
            resp.send({
                length,
                message,
                data
            });
        }
    }
    _201(resp, data, message) {
        resp.status(201);
        resp.send({
            message,
            data
        });
    }
    _203(resp, code, message) {
        resp.status(203);
        resp.send({
            code,
            message: message ? message : this.messageDefault
        });
    }
    //CLIENT ERROR
    _400(resp, error, message) {
        resp.status(400);
        resp.send({
            code: error,
            message: message ? message : this.messageDefault
        });
    }
    //SIMPLE
    message(resp, code, message) {
        resp.status(200);
        if (code) {
            resp.send({
                code,
                message
            });
        }
        else {
            resp.send({
                message
            });
        }
    }
}
exports.default = ResponseCreator;
//# sourceMappingURL=response-creator.function.js.map