import { get } from "../functions/auth.fuction";
import ResponseCreator from "../functions/response-creator.function";
import { connection } from "../config/mysql-connector.confing";

class BowRest {

  /**
    @api {get} /getbows getBows
    @apiVersion 0.0.1
    @apiGroup Bows
    @apiParam {String} id Id del usuario del que se obtendran sus arcos
    @apiDescription Servicio para obtener arcos dependiendo del id del usuario
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "length": bows length,
        "data": [
          {
            "id": bow id,
            "name": "bow name",
            "img": "bow image src",
            "damage": "bow damage",
            "description": "bow description",
            "photo": user photo status
          }, 
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Upps hubo un problema al obtener los datos"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Upps hubo un problema al obtener los datos"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Upps hubo un problema al obtener los datos"
      }
  */
  public getBows(): void {
    get('/getBows', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.query.id) {
        const { id } = req.query;

        connection.query(`call tlozbotw.getBows('${id}')`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Upps hubo un problema al obtener los datos'
            );
            throw err;
          }
            
          if (result[0]) {
            response._200(
              resp,
              result[0], 
              result[0].length
            );
          } else {
            response._403(
              resp,
              result,
              'Upps hubo un problema al obtener los datos'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Upps hubo un problema al obtener los datos'
        );
      }
    });
  }
}
export default BowRest;