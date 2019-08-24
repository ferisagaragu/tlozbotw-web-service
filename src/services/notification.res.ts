import firebase from '../config/firebase.config';
import { _delete } from '../functions/auth.fuction';
import ResponseCreator from '../functions/response-creator.function';

class NotificationRest {

  /**
    @api {delete} /deleteNotification deleteNotification
    @apiVersion 0.0.1
    @apiGroup Notification
    @apiParamExample {json} Request-Example:
      {
        "email": "your user",
        "password": "your password"
      }
    @apiParam {String} email Correo de prueba: ferisagaragu@gmail.com
    @apiParam {String} password Contraseña de prueba: 1234//
    @apiDescription Servicio para iniciar sesión
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "token": "your api token",
        "userData": {
          "uid": "your id",
          "email": "your email",
          "name": "your name",
          "photo": "your url photo",
          "role": your number role
        }
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al iniciar sesión"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden - case 1
      {
        "code": {
          ...error data
        },
        "message": "El usuario o contraseña son incorrectos"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden - case 2
      {
        "code": {
          ...error data
        },
        "message": "El usuario ingresado no esta registrado"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al iniciar sesión"
      }
  */
  public deleteNotification(): void {
    _delete('/deleteNotification', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();

      if (req.query.id, req.query.notifyId) { 
        const { id, notifyId } = req.query;
        firebase.database().ref(`notify/${id}/${notifyId}`).once('value',
          (data: any) => {
            const updateData = data.val();
            updateData.see = true;

            firebase.database().ref(`notify/${id}/${notifyId}`)
              .update(updateData, () => {
                response._200(
                  resp, 
                  null, 
                  0, 
                  'La notificacion fue eliminada de manera satisfactoria'
                );
              }
            );
          }
        );
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al eliminar la notificación'
        );
      }
    });
  }

}

export default NotificationRest;