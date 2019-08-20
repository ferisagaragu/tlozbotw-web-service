define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "login",
    "version": "0.0.1",
    "group": "Login",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user\": \"your user\",\n  \"password\": \"your password\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para iniciar sesión</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"token\": \"your api token\",\n  \"userData\": {\n    \"email\": \"ferisagaragu@gmail.com\",\n    \"uid\": \"b7GZXqkSQKbmenLu3hrCRyHDeue2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Upps hubo un problema al iniciar sesión\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"El usuario o contraseña son incorrectos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Upps hubo un problema al iniciar sesión\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/login.rest.ts",
    "groupTitle": "Login",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/registerUser",
    "title": "registerUser",
    "version": "0.0.1",
    "group": "Login",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"user\": \"your user\",\n  \"password\": \"your password\",\n  \"name\": \"your name\",\n  \"potho\": \"your url photo\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para iniciar sesión</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"token\": \"your api token\",\n  \"userData\": {\n    \"email\": \"ferisagaragu@gmail.com\",\n    \"uid\": \"b7GZXqkSQKbmenLu3hrCRyHDeue2\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Upps hubo un problema al iniciar sesión\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"El usuario o contraseña son incorrectos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Upps hubo un problema al iniciar sesión\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/login.rest.ts",
    "groupTitle": "Login",
    "name": "PostRegisteruser"
  }
] });
