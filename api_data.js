define({ "api": [
  {
    "type": "get",
    "url": "/getbows?id=",
    "title": "getBows",
    "version": "0.0.1",
    "group": "Bows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario del que se obtendran sus arcos. Id de prueba zmqixDaO5xQS7lfq4tZUfRFUHDY2</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para obtener arcos dependiendo del id del usuario</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"length\": bows length,\n  \"data\": [\n    {\n      \"id\": bow id,\n      \"name\": \"bow name\",\n      \"img\": \"bow image src\",\n      \"damage\": \"bow damage\",\n      \"description\": \"bow description\",\n      \"photo\": user photo status\n    }, \n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Upps hubo un problema al obtener los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Upps hubo un problema al obtener los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Upps hubo un problema al obtener los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/bow.rest.ts",
    "groupTitle": "Bows",
    "name": "GetGetbowsId"
  },
  {
    "type": "get",
    "url": "/getUsers",
    "title": "getUsers",
    "version": "0.0.1",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id de prueba: 7ewYFPWBM6NyhPulPgOeJBr3HBW2</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para obtener un listado de todos los usuarios de el sistema (este servicio solo puede ser consumido por un usuario administrador)</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"length\": 1,\n  \"data\": [\n    {\n      \"id\": \"user id\",\n      \"email\": \"user email\",\n      \"name\": \"user name\",\n      \"photo\": \"user url photo\",\n      \"role\": user role name\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Upps hubo un problema al obtener los usuarios\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Upps hubo un problema al obtener los usuarios\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Upps hubo un problema al obtener los usuarios\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/login.rest.ts",
    "groupTitle": "Login",
    "name": "GetGetusers"
  },
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
          "content": "{\n  \"email\": \"your user\",\n  \"password\": \"your password\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo de prueba: ferisagaragu@gmail.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña de prueba: 1234//</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para iniciar sesión</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"token\": \"your api token\",\n  \"userData\": {\n    \"uid\": \"your id\",\n    \"email\": \"your email\",\n    \"name\": \"your name\",\n    \"photo\": \"your url photo\",\n    \"role\": your number role\n  }\n}",
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
          "content": "{\n  \"email\": \"your user\",\n  \"password\": \"your password\",\n  \"name\": \"your name\",\n  \"photo\": \"your url photo\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo de prueba: ferisagaragu@hotmail.com</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña de prueba: 1234//</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre de prueba puede ser cualquiera (De preferencia ningun nombre grosero)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>La foto de usuario puede ser cualquiera solo copia un url (De preferencia que sea contenido para toda la familia)</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para registar un nuevo usuario (Si el usuario ya estra registrado pide que lo borren)</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"message\": \"Usuario registrado con el correo your email\",\n  \"data\": {\n    \"token\": \"your api token\",\n    \"userData\": {\n      \"email\": \"your email\",\n      \"uid\": \"your id\",\n      \"name\": \"your name\",\n      \"photo\": \"your url photo\",\n      \"role\": your number role\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Upps hubo un problema al registrar al usuario\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"La dirección de correo electrónico ya está en uso por otra cuenta\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Upps hubo un problema al registrar al usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/login.rest.ts",
    "groupTitle": "Login",
    "name": "PostRegisteruser"
  }
] });
