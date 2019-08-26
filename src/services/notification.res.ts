import firebase from '../config/firebase.config';
import { _delete, post } from '../functions/auth.fuction';
import ResponseCreator from '../functions/response-creator.function';

class NotificationRest {

  /**
    @api {delete} /deleteNotification deleteNotification
    @apiVersion 0.0.1
    @apiGroup Notification
    @apiParam {String} id Id del usuario al que pertenece la notificación
    @apiParam {Number} notifyId Id de la notificación a eleminar
    @apiDescription Servicio para eliminar la notificacion de un usuario
    @apiSuccessExample {json} HTTP/1.1 201 OK
      {
        "data": "La notificacion fue eliminada de manera satisfactoria"
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al eliminar la notificación"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": "El id de usuario o de la notificacion no se encontro",
        "message": "Hubo un problema al eliminar la notificación"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al eliminar la notificación"
      }
  */
  public deleteNotification(): void {
    _delete('/deleteNotification', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();

      if (req.query.id && req.query.notifyId) { 
        const { id, notifyId } = req.query;
        firebase.database().ref(`notify/${id}/${notifyId}`).once('value',
          (data: any) => {
            const updateData = data.val();
            
            if (updateData) {
              updateData.see = true;
              firebase.database().ref(`notify/${id}/${notifyId}`)
                .update(updateData, (error: any) => {
                  if (error) {
                    console.log('error');
                    throw error;
                  }
                  
                  response._201(
                    resp,
                    'La notificacion fue eliminada de manera satisfactoria'
                  );
                }
              );
            } else {
              response._403(
                resp, 
                'El id de usuario o de la notificacion no se encontro',
                'Hubo un problema al eliminar la notificación'
              );
            }
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

  /**
    @api {post} /createNotification createNotification
    @apiVersion 0.0.1
    @apiGroup Notification
    @apiParam {String} id Id del usuario al que pertenece la notificación
    @apiParam {String} icon Tipo de icono a mostrar info, error y warning
    @apiParam {String} link El link es para revincular al usuario a 
                         algún punto de la pagína (Este campo es opcional)
    @apiParam {String} message El mensaje que se va comunicar al usuario
    @apiParam {String} title El titulo de la notificación
    @apiParamExample {json} Request-Example:
      {
        "id":"Target user id",
        "icon": "info | error | warning",
        "link": "your app link",
        "message": "your message",
        "title": "your title"	
      }
    @apiDescription Servicio para crear una nueva notificación para un usuario
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "data": "La notificación fue creada"
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Hubo un problema al crear la notificación"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Hubo un problema al crear la notificación"
      }
  */
  public createNotification(): void {
    post('/createNotification', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      
      if (
        req.body.id && req.body.icon &&
        req.body.message && req.body.title
      ) { 
        const { id, icon, message, title, link } = req.body;
        
        firebase.database().ref(`notify/${id}/`).push({
          icon,
          message,
          title,
          link,
          see: false
        });

        response._201(
          resp,
          'La notificación fue creada'
        );
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Hubo un problema al crear la notificación'
        );
      }
    });
  }

}

export default NotificationRest;