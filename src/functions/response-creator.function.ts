class ResponseCreator {
  
  messageDefault: string = 'Upps hubo un problema al procesar la información';

  //SERVER ERROR
  public _500(resp: any, error: any, message?: string): void {
    resp.status(500);
    resp.send({
      code: error,
      message: message ? message : this.messageDefault
    });
  }

  //SUCCESS
  public _200(resp: any, data: any, length?: number, message?: string) {
    resp.status(200);
    if (length == 0) {
      resp.send({
        message,
        data
      });
    } else {
      resp.send({
        length,
        message,
        data
      });
    } 
  }

  public _201(resp: any, data?: any, message?: string) {
    resp.status(201);
    resp.send({
      message,
      data
    });
  }

  public _203(resp: any, code: any, message?: string) {
    resp.status(203);
    resp.send({
      code,
      message: message ? message : this.messageDefault
    });
  }

  //CLIENT ERROR
  public _400(resp: any, error: any, message?: string) {
    resp.status(400);
    resp.send({
      code: error,
      message: message ? message : this.messageDefault
    });
  }

  public _403(resp: any, error: any, message?: string) {
    resp.status(403);
    resp.send({
      code: error,
      message: message ? message : this.messageDefault
    });
  }

  //SIMPLE
  public message(resp: any, code?: any, message?: string) {
    resp.status(200);
    if (code) {
      resp.send({
        code,
        message
      });
    } else {
      resp.send({
        message
      });
    }
  }

}

export default ResponseCreator;