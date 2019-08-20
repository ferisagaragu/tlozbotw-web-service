import jwt from 'jsonwebtoken';
import { router } from "../config/server.config";

const secretKey = 'tlozbotw-key';

function ensureToken(req: any, res: any, next: Function) {
  const bearerHeader = req.headers['authorization'];
  
  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

export function auth(urlRest: string, onAuth: Function) {
  router.post(urlRest, (req: Request, resp: any) => {
    onAuth(req, resp, jwt, secretKey);
  });
}

export function get(urlRest: string, onAuth: Function) {
  router.get(urlRest, ensureToken, (req: any, resp: any) => {
    jwt.verify(req.token, secretKey, (err: any, data: any) => {
      if (err) {
        resp.sendStatus(403);
      } else {
        onAuth(req, resp, data);
      }
    });
  });
}

export function post(urlRest: string, onAuth: Function) {
  router.post(urlRest, ensureToken, (req: any, resp: any) => {
    jwt.verify(req.token, secretKey, (err: any, data: any) => {
      if (err) {
        resp.sendStatus(403);
      } else {
        onAuth(req, resp, data);
      }
    });
  });
}

export function put(urlRest: string, onAuth: Function) {
  router.put(urlRest, ensureToken, (req: any, resp: any) => {
    jwt.verify(req.token, secretKey, (err: any, data: any) => {
      if (err) {
        resp.sendStatus(403);
      } else {
        onAuth(req, resp, data);
      }
    });
  });
}

export function _delete(urlRest: string, onAuth: Function) {
  router.delete(urlRest, ensureToken, (req: any, resp: any) => {
    jwt.verify(req.token, secretKey, (err: any, data: any) => {
      if (err) {
        resp.sendStatus(403);
      } else {
        onAuth(req, resp, data);
      }
    });
  });
}

export function noVerifyGet(urlRest: string, onCallBack: Function) {
  router.get(urlRest, (req: any, resp: any) => {
    onCallBack(req, resp);
  });
}