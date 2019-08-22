import firebase from '../config/firebase.config';
import { auth, noVerifyGet, get } from '../functions/auth.fuction';
import ResponseCreator from '../functions/response-creator.function';
import { connection } from '../config/mysql-connector.confing';

class LoginRest {

  public devToken(): void {
    noVerifyGet('/devToken', (req: any, resp: any) => {
      resp.status(200);
      resp.send(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
        'eyJ1c2VyRGF0YSI6eyJ1aWQiOiJiN0daWHFrU1FLYm1' +
        'lbkx1M2hyQ1J5SERldWUyIiwiZW1haWwiOiJmZXJpc2' + 
        'FnYXJhZ3VAZ21haWwuY29tIiwibmFtZSI6InlvdXIgb' +
        'mFtZSIsInBvdGhvIjoieW91ciB1cmwgcGhvdG8ifSwi' +
        'aWF0IjoxNTY2MzQxNTczLCJleHAiOjE1OTc4Nzc1NzN9' +
        '.oCTE3FaCLbOKky1vDL-T_PTL8wljQb9u-JO29iWgKIM'
      );
    });
  }

  /**
    @api {post} /login login
    @apiVersion 0.0.1
    @apiGroup Login
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
        "message": "Upps hubo un problema al iniciar sesión"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          ...error data
        },
        "message": "El usuario o contraseña son incorrectos"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Upps hubo un problema al iniciar sesión"
      }
  */
  public login(): void {
    auth('/login', (req: any, resp: any, jwt: any, secretKey: string) => {
      const response: ResponseCreator = new ResponseCreator();
      if ( req.body.email && req.body.password ) {
        const { email, password } = req.body;

        firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then((snapshot: any) => {
            connection.query(`call tlozbotw.getUser('${snapshot.user.uid}')`,(err, result) => {
              if (err) {
                response._500(
                  resp,
                  err,
                  'Upps no se pudo registrar el usuario'
                );
                throw err;
              }
              const { id, email, name, photo, role } = result[0][0];
              
              const userData = { 
                email, 
                uid: id,
                name,
                photo,
                role
              };
              
              resp.status(200);
              resp.send({
                token: jwt.sign({ userData }, secretKey, { expiresIn: '5h' }),
                userData
              });
            });
          }).catch((error: any) => {
            if (error.code === 'auth/wrong-password') {
              response._403(
                resp,
                error,
                'El usuario o contraseña son incorrectos'
              );
            } else {
              response._500(
                resp,
                error,
                'Upps hubo un problema al iniciar sesión'
              );
            }
          });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Upps hubo un problema al iniciar sesión'
        );
      }
    });
  }

  /**
    @api {post} /registerUser registerUser
    @apiVersion 0.0.1
    @apiGroup Login
    @apiParamExample {json} Request-Example:
      {
        "email": "your user",
        "password": "your password",
        "name": "your name",
        "photo": "your url photo"
      }
    @apiParam {String} email Correo de prueba: ferisagaragu@hotmail.com
    @apiParam {String} password Contraseña de prueba: 1234//
    @apiParam {String} name El nombre de prueba puede ser cualquiera (De preferencia ningun nombre grosero)
    @apiParam {String} photo La foto de usuario puede ser cualquiera solo copia un url 
                             (De preferencia que sea contenido para toda la familia)
    @apiDescription Servicio para registar un nuevo usuario (Si el usuario ya estra registrado pide que lo borren)
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "message": "Usuario registrado con el correo your email",
        "data": {
          "token": "your api token",
          "userData": {
            "email": "your email",
            "uid": "your id",
            "name": "your name",
            "photo": "your url photo",
            "role": your number role
          }
        }
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Upps hubo un problema al registrar al usuario"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          ...error data
        },
        "message": "La dirección de correo electrónico ya está en uso por otra cuenta"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Upps hubo un problema al registrar al usuario"
      }
  */
  public registerUser(): void {
    auth('/registerUser', (req: any, resp: any, jwt: any, secretKey: string) => {
      const response: ResponseCreator = new ResponseCreator();
      if ( req.body.email && req.body.password && req.body.name && req.body.potho ) {
        const { email, password, name, potho } = req.body;

        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .then((snapshot: any) => {
            connection.query(`call tlozbotw.registerOrUpdateUser('${snapshot.user.uid}', '${snapshot.user.email}', '${name}', '${potho}', 0)`,(err, result) => {
              if (err) {
                response._500(
                  resp,
                  err,
                  'Upps no se pudo registrar el usuario'
                );
                throw err;
              }
              const { id, email, name, photo, role } = result[0][0];
              
              const userData = { 
                email, 
                uid: id,
                name,
                photo,
                role
              };

              response._200(
                resp, 
                {
                  token: jwt.sign({ userData }, secretKey, { expiresIn: '5h' }),
                  userData
                },
                0, 
                `Usuario registrado con el correo ${userData.email}`
              );
            });
          }).catch((error: any) => {
            if (error.code === 'auth/email-already-in-use') {
              response._403(
                resp,
                error,
                'La dirección de correo electrónico ya está en uso por otra cuenta'
              );
            } else {
              response._500(
                resp,
                error,
                'Upps hubo un problema al registrar al usuario'
              );
            }
          });
      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Upps hubo un problema al registrar al usuario'
        );
      }
    });
  }
  
  /**
    @api {get} /getUsers getUsers
    @apiVersion 0.0.1
    @apiGroup Login
    @apiParam {String} id Id de prueba: 7ewYFPWBM6NyhPulPgOeJBr3HBW2
    @apiDescription Servicio para obtener un listado de todos los usuarios de el sistema 
                    (este servicio solo puede ser consumido por un usuario administrador)
    @apiSuccessExample {json} HTTP/1.1 200 OK
      {
        "length": 1,
        "data": [
          {
            "id": "user id",
            "email": "user email",
            "name": "user name",
            "photo": "user url photo",
            "role": user role name
          }
        ]
      }
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      {
        "code": "Faltan parametros para hacer la petición",
        "message": "Upps hubo un problema al obtener los usuarios"
      }
    @apiErrorExample {json} HTTP/1.1 403 Forbidden
      {
        "code": {
          ...error data
        },
        "message": "Upps hubo un problema al obtener los usuarios"
      }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      {
        "code": {
          ...error data
        },
        "message": "Upps hubo un problema al obtener los usuarios"
      }
  */
  public getUsers(): void {
    get('/getUsers', (req: any, resp: any) => {
      const response: ResponseCreator = new ResponseCreator();
      if (req.query.id) {
        const { id } = req.query;

        connection.query(`call tlozbotw.getUsersData('${id}');`, (err, result) => {
          if (err) {
            response._500(
              resp,
              err,
              'Upps hubo un problema al obtener los usuarios'
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
              'El rol del usuario no esta autorizado',
              'Upps hubo un problema al obtener los usuarios'
            );
          }
        });

      } else {
        response._400(
          resp, 
          'Faltan parametros para hacer la petición',
          'Upps hubo un problema al obtener los usuarios'
        );
      }
    });
  }
}

export default LoginRest;