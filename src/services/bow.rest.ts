import { get, post, put, _delete } from "../functions/auth.fuction";
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
              'Hubo un problema al obtener los datos'
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
    @api {post} /createBow createBow
    @apiVersion 0.0.1
    @apiGroup Bows
    @apiParamExample {json} Request-Example:
      {	
        "name": "Soy un nombre",
        "damage": "Soy el daño",
        "description": "Soy la descripcion",
        "img": "imagen"
      }
    @apiParam {String} name Nombre del arco que se va a crear
    @apiParam {String} damage Daño del arco que se va a crear
    @apiParam {String} description Descripción del arco que se va a crear
    @apiParam {String} img Url de la imagen del arco que se va a crear
    @apiDescription Servicio para crear arcos
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "message": "El arco 'bow name created' ha sido creado!",
        "data": [
          {
            "id": bow id,
            "name": "bow name",
            "damage": "bow damage",
            "description": "bow description",
            "img": "bow img"
          },
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al crear el arco"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al crear el arco"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al crear el arco"
      }
  */
  public createBow(): void {
    post('/createBow', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.body.name && req.body.damage && req.body.description && req.body.img) {
        const { name, damage, description, img } = req.body;
        
        connection.query(`call tlozbotw.createBow('${name}', '${damage}', '${description}', '${img}')`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al crear el arco'
            );
            throw err;
          }

          if (result[0]) {
            response._201(
              resp,
              result[0], 
              `El arco '${name}' ha sido creado!`
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al crear el arco'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al crear el arco'
        );
      }
    });
  }

  /**
    @api {put} /updateBow updateBow
    @apiVersion 0.0.1
    @apiGroup Bows
    @apiParamExample {json} Request-Example:
      {
        "id": bow id,
        "name": "bow name",
        "damage": "bow damage",
        "description": "bow description",
        "img": "bow imagen"
      }
    @apiParam {Integer} id Id del arco que se va a editar
    @apiParam {String} name Nombre del arco que se va a editar
    @apiParam {String} damage Daño del arco que se va a editar
    @apiParam {String} description Descripción del arco que se va a editar
    @apiParam {String} img Url de la imagen del arco que se va a editar
    @apiDescription Servicio para actualizar un arco
    @apiSuccessExample {json} HTTP/1.1 201 OK
      {
        "message": "El arco 'bow name updated' ha sido actualizado!",
        "data": [
          {
            "id": bow id,
            "name": "bow name",
            "damage": "bow damage",
            "description": "bow description",
            "img": "bow img"
          },
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al actualizar el arco"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al actualizar el arco"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al actualizar el arco"
      }
  */
  public updateBow(): void {
    put('/updateBow', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.body.id && req.body.name && req.body.damage && req.body.description && req.body.img) {
        const { id, name, damage, description, img } = req.body;
        
        connection.query(`call tlozbotw.updateBow(${id}, '${name}', '${damage}', '${description}', '${img}')`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al actualizar el arco'
            );
            throw err;
          }

          if (result[0]) {
            response._201(
              resp,
              result[0], 
              `El arco '${name}' ha sido actualizado!`
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al actualizar el arco'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al actualizar el arco'
        );
      }
    });
  }

  /**
    @api {delete} /deleteBow deleteBow
    @apiVersion 0.0.1
    @apiGroup Bows
    @apiParam {String} id Id del arco que se va a eleminar
    @apiDescription Servicio para eliminar un arco
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "message": "El arco ha sido eliminado!",
        "data": [
          {
            "id": bow id,
            "name": "bow name",
            "damage": "bow damage",
            "description": "bow description",
            "img": "bow img"
          },
          ...
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al eliminar el arco"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          mySQL throw error
        },
        "message": "Hubo un problema al eliminar el arco"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al eliminar el arco"
      }
  */
  public deleteBow(): void {
    _delete('/deleteBow', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.query.id) {
        const { id } = req.query;
        
        connection.query(`call tlozbotw.deleteBow(${id})`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err, 
              'Hubo un problema al eliminar el arco'
            );
            throw err;
          }

          if (result[0]) {
            response._201(
              resp,
              result[0], 
              `El arco ha sido eliminado!`
            );
          } else {
            response._403(
              resp,
              result,
              'Hubo un problema al eliminar el arco'
            );
          }
        });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al eliminar el arco'
        );
      }
    });
  }

}
export default BowRest;