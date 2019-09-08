import { get, post, put, _delete } from "../functions/auth.fuction";
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

  /**
    @api {post} /createMaterial createMaterial
    @apiVersion 0.0.1
    @apiGroup Material
    @apiParam {String} name Nombre del material que se va a crear
    @apiParam {String} pe Puntos de vida del material que se va a crear
    @apiParam {String} power Poder del material que se va a crear
    @apiParam {String} duration Duración del material que se va a crear 
    @apiParam {String} location  Locación del material que se va a crear
    @apiParam {String} description  Descripción del material que se va a crear
    @apiParam {String} img  Imagen del material que se va a crear
    @apiParam {Int} idCategory  Id de la categoria del material que se va a crear
    @apiDescription Servicio para crear un nuevo material
    @apiParamExample {json} Request-Example:
      {
        "name": "new material name",
        "pe": "new material  pe",
        "power": "new material  power",
        "duration": "new material  duration",
        "location": "new material  location",
        "description": "new material  description",
        "img": "new material  image",
        "idCategory": 1 ...11 
      } 
    @apiSuccessExample {json} HTTP/1.1 201 OK
      {
        "length": material length,
        "data": [
          {
            "id": material id,
            "name": "material name",
            "pe": "material pe",
            "power": "material power",
            "duration": "material duration",
            "location": "material location",
            "description": "material description",
            "img": "material img",
            "idCategory": material category id
          } 
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al crear los datos"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al crear los datos"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al crear los datos"
      }
  */
  public createMaterial(): void {
    post('/createMaterial', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (
        req.body.name && req.body.pe &&
        req.body.power && req.body.duration &&
        req.body.location && req.body.description &&
        req.body.img && req.body.idCategory
      ) {
        const { 
          name,
          pe,
          power,
          duration,
          location, 
          description,
          img,
          idCategory  
        } = req.body;

        connection.query(`call tlozbotw.createMaterial('${name}', '${pe}', '${power}', '${duration}', '${location}', '${description}', '${img}', ${idCategory})`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al guardar los datos'
            );
            throw err;
          }
            
          if (result[0]) {
            response._201(
              resp,
              result[0].map((element: any) => (
                {
                  id: element.id,
                  name: element.name,
                  pe: element.pe,
                  power: element.power,
                  duration: element.duration,
                  location: element.location,
                  description: element.description,
                  img: element.img,
                  idCategory: element.idCategory 
                }
              )), 
              result[0].length
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al guardar los datos'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al guardar los datos'
        );
      }
    });
  }
  
  /**
    @api {put} /updateMaterial updateMaterial
    @apiVersion 0.0.1
    @apiGroup Material
    @apiParam {Int} id Id del material que se va a actualizar
    @apiParam {String} name Nombre del material que se va a actualizar
    @apiParam {String} pe Puntos de vida del material que se va a actualizar
    @apiParam {String} power Poder del material que se va a actualizar
    @apiParam {String} duration Duración del material que se va a actualizar 
    @apiParam {String} location  Locación del material que se va a actualizar
    @apiParam {String} description  Descripción del material que se va a actualizar
    @apiParam {String} img  Imagen del material que se va a actualizar
    @apiParam {Int} idCategory  Id de la categoria del material que se va a actualizar
    @apiDescription Servicio para actualizar un material
    @apiParamExample {json} Request-Example:
      {
        "id": material id,
        "name": "new material  name",
        "pe": "new material  pe",
        "power": "new material  power",
        "duration": "new material  duration",
        "location": "new material  location",
        "description": "new material  description",
        "img": "new material  image",
        "idCategory": 1 ...11 
      } 
    @apiSuccessExample {json} HTTP/1.1 201 OK
      {
        "length": material length,
        "data": [
          {
            "id": material id,
            "name": "material name",
            "pe": "material pe",
            "power": "material power",
            "duration": "material duration",
            "location": "material location",
            "description": "material description",
            "img": "material img",
            "idCategory": material category id
          } 
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al actualizar los datos"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al actualizar los datos"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al actualizar los datos"
      }
  */
  public updateMaterial(): void {
    put('/updateMaterial', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (
        req.body.id &&
        req.body.name && req.body.pe &&
        req.body.power && req.body.duration &&
        req.body.location && req.body.description &&
        req.body.img && req.body.idCategory
      ) {
        const {
          id, 
          name,
          pe,
          power,
          duration,
          location, 
          description,
          img,
          idCategory  
        } = req.body;

        connection.query(
          `call tlozbotw.updateMaterial(${id}, '${name}', '${pe}', '${power}',` + 
          `'${duration}', '${location}', '${description}', '${img}', ${idCategory})`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al actualizar los datos'
            );
            throw err;
          }
            
          if (result[0]) {
            response._201(
              resp,
              result[0].map((element: any) => (
                {
                  id: element.id,
                  name: element.name,
                  pe: element.pe,
                  power: element.power,
                  duration: element.duration,
                  location: element.location,
                  description: element.description,
                  img: element.img,
                  idCategory: element.idCategory 
                }
              )), 
              result[0].length
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al actualizar los datos'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al actualizar los datos'
        );
      }
    });
  }

  /**
    @api {put} /deleteMaterial deleteMaterial
    @apiVersion 0.0.1
    @apiGroup Material
    @apiParam {Int} id Id del material que se va a eliminar
    @apiDescription Servicio para eliminar un material
    @apiSuccessExample {json} HTTP/1.1 201 OK
      {
        "length": material length,
        "data": [
          {
            "id": material id,
            "name": "material name",
            "pe": "material pe",
            "power": "material power",
            "duration": "material duration",
            "location": "material location",
            "description": "material description",
            "img": "material img",
            "idCategory": material category id
          } 
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al eliminar los datos"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al eliminar los datos"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al eliminar los datos"
      }
  */
  public deleteMaterial(): void {
    _delete('/deleteMaterial', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.query.id) {
        const { id } = req.query;

        connection.query(`call tlozbotw.deleteMaterial(${id})`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al eliminar los datos'
            );
            throw err;
          }
            
          if (result[0]) {
            response._201(
              resp,
              result[0].map((element: any) => (
                {
                  id: element.id,
                  name: element.name,
                  pe: element.pe,
                  power: element.power,
                  duration: element.duration,
                  location: element.location,
                  description: element.description,
                  img: element.img,
                  idCategory: element.idCategory 
                }
              )), 
              result[0].length
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al eliminar los datos'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al eliminar los datos'
        );
      }
    });
  }

}
export default BowRest;