"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_connector_confing_1 = require("../config/mysql-connector.confing");
class MaterialsRest {
    constructor(router) {
        this.router = router;
    }
    getMaterials() {
        this.router.get('/login', (req, resp) => {
            //const { body } = req;
            mysql_connector_confing_1.connection.query('SELECT * FROM users', function (error, results, fields) {
                if (!error) {
                    const queryResp = {
                        code: '',
                        length: results.length,
                        message: '',
                        data: results
                    };
                    resp.send(queryResp);
                }
                else {
                    resp.status(500);
                    const queryResp = {
                        code: error,
                        length: 0,
                        message: 'Error al consultar',
                        data: {}
                    };
                    resp.send(queryResp);
                }
            });
        });
    }
}
exports.default = MaterialsRest;
//# sourceMappingURL=materials.rest.js.map