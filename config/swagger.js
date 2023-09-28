import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Life Health FHIR Server',
      version: '1.0.0',
      description: 'Documentação da API Life Health FHIR Server',
    },
    basePath: 'https://life-health-fhir-server.vercel.app/',
  },
  apis: ['src/routes/*.js'], // Onde seus arquivos com comentários Swagger estão localizados
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
