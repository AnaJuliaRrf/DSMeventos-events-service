const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DSMeventos - Events Service',
      version: '1.0.0'
    },
    servers: [
      { url: `http://localhost:${process.env.PORT || 4000}` }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: []
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;