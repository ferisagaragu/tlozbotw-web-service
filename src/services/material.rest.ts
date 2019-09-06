import { get } from "../functions/auth.fuction";
import ResponseCreator from "../functions/response-creator.function";
import { connection } from "../config/mysql-connector.confing";

class BowRest {

  /**
    @api {get} /getMaterial getMaterial
    @apiVersion 0.0.1
    @apiGroup Material
    @apiParam {String} id Id del usuario del que se obtendran los materiales
    @apiDescription Servicio para obtener materiales dependiendo del id del usuario
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "length": material length,
        "data": [
          {
            "id": material id,
            "name": "material name",
            "pe": "material pe",
            "power": "material power",
            "location": "material location",
            "description": "material description",
            "img": "material img",
            "check": true | false
          } 
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al obtener los datos"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al obtener los datos"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al obtener los datos"
      }
  */
  public getMaterial(): void {
    get('/getMaterial', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.query.id) {
        const { id } = req.query;

        connection.query(`call tlozbotw.getMaterial('${id}')`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al obtener los datos'
            );
            throw err;
          }
            
          if (result[0]) {
            response._200(
              resp,
              result[0].map((element: any) => (
                {
                  id: element.id,
                  name: element.name,
                  pe: element.pe,
                  power: element.power,
                  location: element.location,
                  description: element.description,
                  img: element.img,
                  check: !element.check ? false : element.check === 1 ? true : false
                }
              )), 
              result[0].length
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al obtener los datos'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al obtener los datos'
        );
      }
    });
  }

}
export default BowRest;