import { Router } from 'express';
import * as doctorController from '../controllers/doctorController.js';

const router = Router();

/**
 * @swagger
 * /doctor:
 *   post:
 *     summary: Cria novo usuário/médico
 *     description: Realiza a criação de novo  usuário/médico.
 *     responses:
 *       '200':
 *         description: OK. Retorna médico cadastrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.post('/doctor', doctorController.createDoctor);

/**
 * @swagger
 * /doctor:
 *   get:
 *     summary: Busca usuários/doctor
 *     description: Realiza a busca dos  usuários/doctor.
 *     responses:
 *       '200':
 *         description: OK. Retorna todos os usuários/doctor.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/doctor', doctorController.getAllDoctor);

/**
 * @swagger
 * /doctor:
 *   get:
 *     summary: Busca usuário/doctor por id
 *     description: Realiza a busca do  usuário/doctor por id.
 *     responses:
 *       '200':
 *         description: OK. Retorna o usuário/doctor.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.get('/doctor/:id', doctorController.getDoctorId);

/**
 * @swagger
 * /doctor:
 *   put:
 *     summary: Atualiza dados do usuário/doctor
 *     description: Atualiza dados do cadastro do usuário/doctor.
 *     responses:
 *       '200':
 *         description: OK. Retorna dados do usuário/doctor cadastrado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.put('/doctor/:id', doctorController.updateDoctor);

/**
 * @swagger
 * /doctor:
 *   delete:
 *     summary: Remove usuário/doctor
 *     description: Remove cadastro do usuário/doctor.
 *     responses:
 *       '200':
 *         description: OK. Usuário/doctor deletado.
 *       '500':
 *         description: Erro interno do servidor.
 */
router.delete('/doctor/:id', doctorController.deleteDoctor);

export default router;