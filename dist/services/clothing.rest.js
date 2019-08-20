"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_connector_confing_1 = require("../config/mysql-connector.confing");
const response_creator_function_1 = __importDefault(require("../functions/response-creator.function"));
const auth_fuction_1 = require("../functions/auth.fuction");
const messages = {
    noUser: 'El usuario con el que se solicito la informacion no existe',
    noDelete: 'El ropaje no a sido eliminado',
    delete: 'El ropaje a sido eliminado exitosamente'
};
class ClothingRest {
    /**
     @api {get} /getClothing getClothing
     @apiVersion 0.0.1
     @apiGroup Clothing
     @apiParam {string} id FNfi3a5O8sNOI7B3v1HOoCBckOE2
     @apiDescription Servicio para optener una lista de todos los ropajes con
                     las modificaciones que el usuario a indicado
     @apiSuccessExample {json} HTTP/1.1 200 OK
        {
          "length": 107,
          "data": [
            {
              "id": 33,
              "zone": "Torso.",
              "defending": 4,
              "effect": "Resistencia ancestral.",
              "name": "Armadura ancestral",
              "dlc": 0,
              "amiibo": 0,
              "bonus": 0,
              "img": null,
              "check": 0,
              "updateDefending": null,
              "materials": null,
              "level": null
            },
            ...
          ]
        }
      @apiSuccessExample {json} HTTP/1.1 203 Non-Authoritative Information
        {
          "code": "User id dont exist",
          "message": "El usuario con el que se solicito la informacion no existe"
        }
      @apiErrorExample {json} HTTP/1.1 400 Bad Request
        {
          "code": "User id is emply",
          "message": "Upps hubo un problema al procesar la información"
        }
      @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
        {
          "code": trow error,
          "message": "Upps hubo un problema al procesar la información"
        }
    */
    getClothing() {
        auth_fuction_1.get('/getClothing', (req, resp) => {
            const { body, query } = req;
            const responseCreator = new response_creator_function_1.default();
            if (query.id) {
                mysql_connector_confing_1.connection.query(`call getClothing('${query.id}')`, (error, results, fields) => {
                    if (!error) {
                        if (results[0][0].errordb == 'errordb') {
                            responseCreator._203(resp, 'User id dont exist', messages.noUser);
                        }
                        else {
                            responseCreator._200(resp, results[0].map((data) => {
                                if (!data.check) {
                                    data.check = 0;
                                }
                                return data;
                            }, results[0].length));
                        }
                    }
                    else {
                        responseCreator._500(resp, error);
                    }
                });
            }
            else {
                responseCreator._400(resp, 'User id is emply');
            }
        });
    }
    /**
     @api {post} /createOrUpdateClothing createOrUpdateClothing
     @apiVersion 0.0.1
     @apiGroup Clothing
     @apiParamExample {json} Params - data:
        {
          "idUser":"FNfi3a5O8sNOI7B3v1HOoCBckOE2",
          "idClothing": 1,
          "check": 1,
          "levelP": 1
        }
     @apiDescription Servicio para crear o actualizar los ropajes con
                     las modificaciones que el usuario a indicado
     @apiSuccessExample {json} HTTP/1.1 201 Created - Create
        {
          "data": {
            "queryCode": "insert"
          }
        }
      @apiSuccessExample {json} HTTP/1.1 201 Created - Update
        {
          "data": {
            "queryCode": "update"
          }
        }
      @apiErrorExample {json} HTTP/1.1 400 Bad Request
        {
          "code": "There are no parameters in the request",
          "message": "Upps hubo un problema al procesar la información"
        }
      @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
        {
          "code": trow error,
          "message": "Upps hubo un problema al procesar la información"
        }
    */
    createOrUpdateClothing() {
        auth_fuction_1.post('/createOrUpdateClothing', (req, resp) => {
            const { body, query } = req;
            const responseCreator = new response_creator_function_1.default();
            if (body.data) {
                const data = JSON.parse(body.data);
                mysql_connector_confing_1.connection.query(`call createOrUpdateClothing('${data.idUser}', ${data.idClothing}, ${data.check}, ${data.levelP})`, (error, results, fields) => {
                    if (!error) {
                        responseCreator._201(resp, {
                            queryCode: results[0][0].resp == 0 ? 'insert' : 'update'
                        });
                    }
                    else {
                        responseCreator._500(resp, error);
                    }
                });
            }
            else {
                responseCreator._400(resp, 'There are no parameters in the request');
            }
        });
    }
    /**
     @api {delete} /deleteRegistClothing deleteRegistClothing
     @apiVersion 0.0.1
     @apiGroup Clothing
     @apiParamExample {json} Params - data:
        {
          "idUser":"FNfi3a5O8sNOI7B3v1HOoCBckOE2",
          "idClothing": 2
        }
     @apiDescription Servicio para eliminar un ropaje
     @apiSuccessExample {json} HTTP/1.1 200 OK
        {
          "message": "El ropaje no a sido eliminado",
          "data": {
            "idUser": "FNfi3a5O8sNOI7B3v1HOoCBckOE2",
            "idClothing": 2
          }
        }
      @apiSuccessExample {json} HTTP/1.1 201 Created
        {
          "message": "El ropaje a sido eliminado exitosamente",
          "data": {
            "idUser": "FNfi3a5O8sNOI7B3v1HOoCBckOE2",
            "idClothing": 2
          }
        }
      @apiErrorExample {json} HTTP/1.1 400 Bad Request
        {
          "code": "There are no parameters in the request",
          "message": "Upps hubo un problema al procesar la información"
        }
      @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
        {
          "code": trow error,
          "message": "Upps hubo un problema al procesar la información"
        }
    */
    deleteRegistClothing() {
        auth_fuction_1._delete('/deleteRegistClothing', (req, resp) => {
            const { body, query } = req;
            const responseCreator = new response_creator_function_1.default();
            if (body.data) {
                const data = JSON.parse(body.data);
                mysql_connector_confing_1.connection.query(`call deleteRegistClothin('${data.idUser}', ${data.idClothing})`, (error, results, fields) => {
                    if (!error) {
                        if (results.affectedRows == 0) {
                            responseCreator._200(resp, data, 0, messages.noDelete);
                        }
                        else {
                            responseCreator._201(resp, data, messages.delete);
                        }
                    }
                    else {
                        responseCreator._500(resp, error);
                    }
                });
            }
            else {
                responseCreator._400(resp, 'There are no parameters in the request');
            }
        });
    }
}
exports.default = ClothingRest;
//# sourceMappingURL=clothing.rest.js.map