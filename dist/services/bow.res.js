"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_fuction_1 = require("../functions/auth.fuction");
const response_creator_function_1 = __importDefault(require("../functions/response-creator.function"));
class BowRest {
    getBow() {
        auth_fuction_1.get('/getBow', (req, resp) => {
            const { body, query } = req;
            const responseCreator = new response_creator_function_1.default();
            if (query.id) {
                //const data = JSON.parse(body.data);
                /*connection.query(`INSERT INTO tlozbotw.bow (name, damage, description, img) VALUES ('${null}', 'e', 'e', 'e')`
                , function (error, results, fields) {
                  
                  /*if (!error) {
                    if (results[0][0].errordb == 'errordb') {
                      responseCreator._203(resp, 'User id dont exist', '');
                    } else {
        
                      responseCreator._200(resp, results[0].map((data: any) => {
                        if (!data.check) {
                          data.check = 0;
                        }
                        return data;
                      }, results[0].length));
        
                    }
                  } else {
                    responseCreator._500(resp, error);
                  }*/
                //});
                resp.send('Echo');
            }
            else {
                responseCreator._400(resp, 'There are no parameters in the request');
            }
        });
    }
}
exports.default = BowRest;
//# sourceMappingURL=bow.res.js.map