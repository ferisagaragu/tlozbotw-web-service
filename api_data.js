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
          "content": "{\n  \"token\": \"your api token\",\n  \"userData\": {\n    \"uid\": \"your id\",\n    \"email\": \"your email\",\n    \"name\": \"your name\",\n    \"potho\": \"your url photo\"\n  }\n}",
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
          "content": "{\n  \"email\": \"your user\",\n  \"password\": \"your password\",\n  \"name\": \"your name\",\n  \"potho\": \"your url photo\"\n}",
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
            "field": "potho",
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
          "content": "{\n  \"message\": \"Usuario registrado con el correo javabrain.email@gmail.com\",\n  \"data\": {\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJlbWFpbCI6ImphdmFicmFpbi5lbWFpbEBnbWFpbC5jb20iLCJ1aWQiOiJpQU5WcTdEUnFGT3l5SE16aUJJM09CZmNiVmcyIiwibmFtZSI6InlvdXIgbmFtZSIsInBvdGhvIjoieW91ciB1cmwgcGhvdG8ifSwiaWF0IjoxNTY2MzQwNjk0LCJleHAiOjE1NjYzNTg2OTR9.IqDQtTc69c7Ji3HZ-ez1VsNMB6_g0zYPtr9trgMd1qo\",\n    \"userData\": {\n      \"email\": \"javabrain.email@gmail.com\",\n      \"uid\": \"iANVq7DRqFOyyHMziBI3OBfcbVg2\",\n      \"name\": \"your name\",\n      \"potho\": \"your url photo\"\n    }\n  }\n}",
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
