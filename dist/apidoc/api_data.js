define({ "api": [
  {
    "type": "delete",
    "url": "/deleteRegistClothing",
    "title": "deleteRegistClothing",
    "version": "0.0.1",
    "group": "Clothing",
    "parameter": {
      "examples": [
        {
          "title": "Params - data:",
          "content": "{\n  \"idUser\":\"FNfi3a5O8sNOI7B3v1HOoCBckOE2\",\n  \"idClothing\": 2\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para eliminar un ropaje</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"message\": \"El ropaje no a sido eliminado\",\n  \"data\": {\n    \"idUser\": \"FNfi3a5O8sNOI7B3v1HOoCBckOE2\",\n    \"idClothing\": 2\n  }\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 201 Created",
          "content": "{\n  \"message\": \"El ropaje a sido eliminado exitosamente\",\n  \"data\": {\n    \"idUser\": \"FNfi3a5O8sNOI7B3v1HOoCBckOE2\",\n    \"idClothing\": 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"There are no parameters in the request\",\n  \"message\": \"Upps hubo un problema al procesar la información\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": trow error,\n  \"message\": \"Upps hubo un problema al procesar la información\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/clothing.rest.ts",
    "groupTitle": "Clothing",
    "name": "DeleteDeleteregistclothing"
  },
  {
    "type": "get",
    "url": "/getClothing",
    "title": "getClothing",
    "version": "0.0.1",
    "group": "Clothing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>FNfi3a5O8sNOI7B3v1HOoCBckOE2</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para optener una lista de todos los ropajes con las modificaciones que el usuario a indicado</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"length\": 107,\n  \"data\": [\n    {\n      \"id\": 33,\n      \"zone\": \"Torso.\",\n      \"defending\": 4,\n      \"effect\": \"Resistencia ancestral.\",\n      \"name\": \"Armadura ancestral\",\n      \"dlc\": 0,\n      \"amiibo\": 0,\n      \"bonus\": 0,\n      \"img\": null,\n      \"check\": 0,\n      \"updateDefending\": null,\n      \"materials\": null,\n      \"level\": null\n    },\n    ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 203 Non-Authoritative Information",
          "content": "{\n  \"code\": \"User id dont exist\",\n  \"message\": \"El usuario con el que se solicito la informacion no existe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"User id is emply\",\n  \"message\": \"Upps hubo un problema al procesar la información\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": trow error,\n  \"message\": \"Upps hubo un problema al procesar la información\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/clothing.rest.ts",
    "groupTitle": "Clothing",
    "name": "GetGetclothing"
  },
  {
    "type": "post",
    "url": "/createOrUpdateClothing",
    "title": "createOrUpdateClothing",
    "version": "0.0.1",
    "group": "Clothing",
    "parameter": {
      "examples": [
        {
          "title": "Params - data:",
          "content": "{\n  \"idUser\":\"FNfi3a5O8sNOI7B3v1HOoCBckOE2\",\n  \"idClothing\": 1,\n  \"check\": 1,\n  \"levelP\": 1\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para crear o actualizar los ropajes con las modificaciones que el usuario a indicado</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 Created - Create",
          "content": "{\n  \"data\": {\n    \"queryCode\": \"insert\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 201 Created - Update",
          "content": "{\n  \"data\": {\n    \"queryCode\": \"update\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"There are no parameters in the request\",\n  \"message\": \"Upps hubo un problema al procesar la información\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": trow error,\n  \"message\": \"Upps hubo un problema al procesar la información\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/clothing.rest.ts",
    "groupTitle": "Clothing",
    "name": "PostCreateorupdateclothing"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "login",
    "version": "0.0.1",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>FNfi3a5O8sNOI7B3v1HOoCBckOE2</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para iniciar sesión</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "token",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{ }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{ }",
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
    "url": "/logout",
    "title": "login",
    "version": "0.0.1",
    "group": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>FNfi3a5O8sNOI7B3v1HOoCBckOE2</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para iniciar sesión</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "token",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{ }",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{ }",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/login.rest.ts",
    "groupTitle": "Login",
    "name": "PostLogout"
  }
] });
