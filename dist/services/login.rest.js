"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_fuction_1 = require("../functions/auth.fuction");
class LoginRest {
    /**
     @api {post} /login login
     @apiVersion 0.0.1
     @apiGroup Login
     @apiParam {string} id FNfi3a5O8sNOI7B3v1HOoCBckOE2
     @apiDescription Servicio para iniciar sesión
     @apiSuccessExample {json} HTTP/1.1 200 OK
        token
      @apiErrorExample {json} HTTP/1.1 400 Bad Request
        { }
      @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
        { }
    */
    login() {
        auth_fuction_1.auth('/login', (req, resp, jwt, secretKey) => {
            const user = { id: 1 };
            resp.send({
                token: jwt.sign({ user }, secretKey, { expiresIn: '5h' })
            });
        });
    }
    /**
     @api {post} /logout login
     @apiVersion 0.0.1
     @apiGroup Login
     @apiParam {string} id FNfi3a5O8sNOI7B3v1HOoCBckOE2
     @apiDescription Servicio para iniciar sesión
     @apiSuccessExample {json} HTTP/1.1 200 OK
        token
      @apiErrorExample {json} HTTP/1.1 400 Bad Request
        { }
      @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
        { }
    */
    logout() {
        /*auth('/login', (req: Request, resp: any, jwt: any, secretKey: string) => {
          const user = { id: 1 };
          resp.send(jwt.sign({ user }, secretKey, { expiresIn: '5h' }));
        });*/
    }
}
exports.default = LoginRest;
//# sourceMappingURL=login.rest.js.map