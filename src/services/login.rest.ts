import { auth } from '../functions/auth.fuction';

class LoginRest {
  
  /**
   @api {post} /login login
   @apiVersion 0.0.1
   @apiGroup Login
   @apiParam {string} id FNfi3a5O8sNOI7B3v1HOoCBckOE2
   @apiDescription Servicio para iniciar sesión
   @apiSuccessExample {json} HTTP/1.1 200 OK
      token
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      { }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      { }
  */
  public login(): void {
    auth('/login', (req: Request, resp: any, jwt: any, secretKey: string) => {
      const user = { id: 1 };
      resp.send({
        token: jwt.sign({ user }, secretKey, { expiresIn: '5h' })
      });
    });
  }

  /**
   @api {post} /logout login
   @apiVersion 0.0.1
   @apiGroup Login
   @apiParam {string} id FNfi3a5O8sNOI7B3v1HOoCBckOE2
   @apiDescription Servicio para iniciar sesión
   @apiSuccessExample {json} HTTP/1.1 200 OK
      token
    @apiErrorExample {json} HTTP/1.1 400 Bad Request
      { }
    @apiErrorExample {json} HTTP/1.1 500 Internal Server Error
      { }
  */
 public logout(): void {
    /*auth('/login', (req: Request, resp: any, jwt: any, secretKey: string) => {
      const user = { id: 1 };
      resp.send(jwt.sign({ user }, secretKey, { expiresIn: '5h' }));
    });*/
  }
  
}

export default LoginRest;