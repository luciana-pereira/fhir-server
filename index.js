import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js'; 
import patientRoutes from './src/routes/patientRoutes.js'; // Importe as rotas de paciente
import  { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(patientRoutes); // Use as rotas de paciente em /patient
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/patient', createProxyMiddleware({
    target: 'https://life-health-fhir-server.vercel.app',
    changeOrigin: true,  // Permite alterar a origem para evitar problemas de CORS
  }));
app.listen(port);
