import { Router } from 'express';
import * as patientController from '../controllers/patientController.js';

const router = Router();

/**
 * @swagger
 * /patient:
 *   post:
 *     summary: Cria novo usuário/paciente
 *     description: Realiza a criação de novo  usuário/paciente.
 *     responses:
 *       '200':
 *         description: OK. Retorna paciente cadastrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/patient', patientController.createPatient);

/**
 * @swagger
 * /patient:
 *   get:
 *     summary: Busca usuários/pacientes
 *     description: Realiza a busca dos  usuários/pacientes.
 *     responses:
 *       '200':
 *         description: OK. Retorna todos os usuários/pacientes.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/patient', patientController.getAllPatient);

/**
 * @swagger
 * /patient:
 *   get:
 *     summary: Busca usuário/paciente por id
 *     description: Realiza a busca do  usuário/paciente por id.
 *     responses:
 *       '200':
 *         description: OK. Retorna o usuário/paciente.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/patient/:id', patientController.getPatientId);

/**
 * @swagger
 * /patient:
 *   put:
 *     summary: Atualiza dados do usuário/paciente
 *     description: Atualiza dados do cadastro do usuário/paciente.
 *     responses:
 *       '200':
 *         description: OK. Retorna dados do usuário/paciente cadastrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/patient/:id', patientController.updatePatient);

/**
 * @swagger
 * /patient:
 *   delete:
 *     summary: Remove usuário/paciente
 *     description: Remove cadastro do usuário/paciente.
 *     responses:
 *       '200':
 *         description: OK. Usuário/paciente deletado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/patient/:id', patientController.deletePatient);

export default router;