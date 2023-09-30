import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js'; 
import patientRoutes from './src/routes/patientRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(patientRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(port);
