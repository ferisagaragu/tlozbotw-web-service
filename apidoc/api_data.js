define({ "api": [
  {
    "type": "delete",
    "url": "/deleteBow",
    "title": "deleteBow",
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
            "description": "<p>Id del arco que se va a eleminar</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para eliminar un arco</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"message\": \"El arco ha sido eliminado!\",\n  \"data\": [\n    {\n      \"id\": bow id,\n      \"name\": \"bow name\",\n      \"damage\": \"bow damage\",\n      \"description\": \"bow description\",\n      \"img\": \"bow img\"\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al eliminar el arco\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al eliminar el arco\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al eliminar el arco\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/bow.rest.ts",
    "groupTitle": "Bows",
    "name": "DeleteDeletebow"
  },
  {
    "type": "get",
    "url": "/getbows",
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
            "description": "<p>Id del usuario del que se obtendran sus arcos</p>"
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
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al obtener los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al obtener los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al obtener los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/bow.rest.ts",
    "groupTitle": "Bows",
    "name": "GetGetbows"
  },
  {
    "type": "post",
    "url": "/createBow",
    "title": "createBow",
    "version": "0.0.1",
    "group": "Bows",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\t\n  \"name\": \"Soy un nombre\",\n  \"damage\": \"Soy el daño\",\n  \"description\": \"Soy la descripcion\",\n  \"img\": \"imagen\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del arco que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "damage",
            "description": "<p>Daño del arco que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del arco que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Url de la imagen del arco que se va a crear</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para crear arcos</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"message\": \"El arco 'bow name created' ha sido creado!\",\n  \"data\": [\n    {\n      \"id\": bow id,\n      \"name\": \"bow name\",\n      \"damage\": \"bow damage\",\n      \"description\": \"bow description\",\n      \"img\": \"bow img\"\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al crear el arco\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al crear el arco\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al crear el arco\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/bow.rest.ts",
    "groupTitle": "Bows",
    "name": "PostCreatebow"
  },
  {
    "type": "put",
    "url": "/updateBow",
    "title": "updateBow",
    "version": "0.0.1",
    "group": "Bows",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": bow id,\n  \"name\": \"bow name\",\n  \"damage\": \"bow damage\",\n  \"description\": \"bow description\",\n  \"img\": \"bow imagen\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del arco que se va a editar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del arco que se va a editar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "damage",
            "description": "<p>Daño del arco que se va a editar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del arco que se va a editar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Url de la imagen del arco que se va a editar</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para actualizar un arco</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 OK",
          "content": "{\n  \"message\": \"El arco 'bow name updated' ha sido actualizado!\",\n  \"data\": [\n    {\n      \"id\": bow id,\n      \"name\": \"bow name\",\n      \"damage\": \"bow damage\",\n      \"description\": \"bow description\",\n      \"img\": \"bow img\"\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al actualizar el arco\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al actualizar el arco\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al actualizar el arco\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/bow.rest.ts",
    "groupTitle": "Bows",
    "name": "PutUpdatebow"
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
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al obtener los usuarios\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al obtener los usuarios\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al obtener los usuarios\"\n}",
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
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al iniciar sesión\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden - case 1",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"El usuario o contraseña son incorrectos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden - case 2",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"El usuario ingresado no esta registrado\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al iniciar sesión\"\n}",
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
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al registrar al usuario\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"La dirección de correo electrónico ya está en uso por otra cuenta\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al registrar al usuario\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/login.rest.ts",
    "groupTitle": "Login",
    "name": "PostRegisteruser"
  },
  {
    "type": "get",
    "url": "/getMaterial",
    "title": "getMaterial",
    "version": "0.0.1",
    "group": "Material",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario del que se obtendran los materiales</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para obtener materiales dependiendo del id del usuario</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"length\": material length,\n  \"data\": [\n    {\n      \"id\": material id,\n      \"name\": \"material name\",\n      \"pe\": \"material pe\",\n      \"power\": \"material power\",\n      \"location\": \"material location\",\n      \"description\": \"material description\",\n      \"img\": \"material img\",\n      \"check\": true | false\n    } \n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al obtener los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al obtener los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al obtener los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/material.rest.ts",
    "groupTitle": "Material",
    "name": "GetGetmaterial"
  },
  {
    "type": "post",
    "url": "/createMaterial",
    "title": "createMaterial",
    "version": "0.0.1",
    "group": "Material",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pe",
            "description": "<p>Puntos de vida del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "power",
            "description": "<p>Poder del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Duración del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Locación del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Imagen del material que se va a crear</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCategory",
            "description": "<p>Id de la categoria del material que se va a crear</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"name\": \"new material name\",\n  \"pe\": \"new material  pe\",\n  \"power\": \"new material  power\",\n  \"duration\": \"new material  duration\",\n  \"location\": \"new material  location\",\n  \"description\": \"new material  description\",\n  \"img\": \"new material  image\",\n  \"idCategory\": 1 ...11 \n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para crear un nuevo material</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 OK",
          "content": "{\n  \"length\": material length,\n  \"data\": [\n    {\n      \"id\": material id,\n      \"name\": \"material name\",\n      \"pe\": \"material pe\",\n      \"power\": \"material power\",\n      \"duration\": \"material duration\",\n      \"location\": \"material location\",\n      \"description\": \"material description\",\n      \"img\": \"material img\",\n      \"idCategory\": material category id\n    } \n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al crear los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al crear los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al crear los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/material.rest.ts",
    "groupTitle": "Material",
    "name": "PostCreatematerial"
  },
  {
    "type": "put",
    "url": "/deleteMaterial",
    "title": "deleteMaterial",
    "version": "0.0.1",
    "group": "Material",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id del material que se va a eliminar</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para eliminar un material</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 OK",
          "content": "{\n  \"length\": material length,\n  \"data\": [\n    {\n      \"id\": material id,\n      \"name\": \"material name\",\n      \"pe\": \"material pe\",\n      \"power\": \"material power\",\n      \"duration\": \"material duration\",\n      \"location\": \"material location\",\n      \"description\": \"material description\",\n      \"img\": \"material img\",\n      \"idCategory\": material category id\n    } \n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al eliminar los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al eliminar los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al eliminar los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/material.rest.ts",
    "groupTitle": "Material",
    "name": "PutDeletematerial"
  },
  {
    "type": "put",
    "url": "/updateMaterial",
    "title": "updateMaterial",
    "version": "0.0.1",
    "group": "Material",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>Id del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pe",
            "description": "<p>Puntos de vida del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "power",
            "description": "<p>Poder del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "duration",
            "description": "<p>Duración del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Locación del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Descripción del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "img",
            "description": "<p>Imagen del material que se va a actualizar</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "idCategory",
            "description": "<p>Id de la categoria del material que se va a actualizar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\": material id,\n  \"name\": \"new material  name\",\n  \"pe\": \"new material  pe\",\n  \"power\": \"new material  power\",\n  \"duration\": \"new material  duration\",\n  \"location\": \"new material  location\",\n  \"description\": \"new material  description\",\n  \"img\": \"new material  image\",\n  \"idCategory\": 1 ...11 \n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para actualizar un material</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 OK",
          "content": "{\n  \"length\": material length,\n  \"data\": [\n    {\n      \"id\": material id,\n      \"name\": \"material name\",\n      \"pe\": \"material pe\",\n      \"power\": \"material power\",\n      \"duration\": \"material duration\",\n      \"location\": \"material location\",\n      \"description\": \"material description\",\n      \"img\": \"material img\",\n      \"idCategory\": material category id\n    } \n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al actualizar los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": {\n    mySQL throw error\n  },\n  \"message\": \"Hubo un problema al actualizar los datos\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al actualizar los datos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/material.rest.ts",
    "groupTitle": "Material",
    "name": "PutUpdatematerial"
  },
  {
    "type": "delete",
    "url": "/deleteNotification",
    "title": "deleteNotification",
    "version": "0.0.1",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario al que pertenece la notificación</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notifyId",
            "description": "<p>Id de la notificación a eleminar</p>"
          }
        ]
      }
    },
    "description": "<p>Servicio para eliminar la notificacion de un usuario</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 201 OK",
          "content": "{\n  \"data\": \"La notificacion fue eliminada de manera satisfactoria\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al eliminar la notificación\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 403 Forbidden",
          "content": "{\n  \"code\": \"El id de usuario o de la notificacion no se encontro\",\n  \"message\": \"Hubo un problema al eliminar la notificación\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al eliminar la notificación\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/notification.res.ts",
    "groupTitle": "Notification",
    "name": "DeleteDeletenotification"
  },
  {
    "type": "post",
    "url": "/createNotification",
    "title": "createNotification",
    "version": "0.0.1",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario al que pertenece la notificación</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>Tipo de icono a mostrar info, error y warning</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>El link es para revincular al usuario a algún punto de la pagína (Este campo es opcional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>El mensaje que se va comunicar al usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>El titulo de la notificación</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":\"Target user id\",\n  \"icon\": \"info | error | warning\",\n  \"link\": \"your app link\",\n  \"message\": \"your message\",\n  \"title\": \"your title\"\t\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Servicio para crear una nueva notificación para un usuario</p>",
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "{\n  \"data\": \"La notificación fue creada\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "HTTP/1.1 400 Bad Request",
          "content": "{\n  \"code\": \"Faltan parametros para hacer la petición\",\n  \"message\": \"Hubo un problema al crear la notificación\"\n}",
          "type": "json"
        },
        {
          "title": "HTTP/1.1 500 Internal Server Error",
          "content": "{\n  \"code\": {\n    ...error data\n  },\n  \"message\": \"Hubo un problema al crear la notificación\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/services/notification.res.ts",
    "groupTitle": "Notification",
    "name": "PostCreatenotification"
  }
] });
