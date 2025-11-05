import express from "express";

import {
	getTasks,
	createTask,
	updateTask,
	deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - completed
 *         - createdAt
 *       properties:
 *         title:
 *           type: string
 *           description: titulo de la tarea
 *           example: "Crear las rutas para el login"
 *         description:
 *           type: string
 *           description: detalles sobre la tarea
 *           example: "se debe crear un register, login y delete para el usuario"
 *         completed:
 *           type: boolean
 *           format: boolean
 *           description: determina si la tarea ya esta completada
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Hora de creación
 *   responses:
 *     BadRequest:
 *       description: Datos inválidos en la petición
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: "Bad Request"
 *               message:
 *                 type: string
 *                 example: "Los datos proporcionados no cumplen con los requisitos."
 *     NotFound:
 *       description: Recurso no encontrado
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: "Not Found"
 *               message:
 *                 type: string
 *                 example: "El recurso solicitado no se encontró en el servidor."
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints para gestión de las tareas
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Task]
 *     responses:
 *       200:
 *         description: Lista de tareas recuperada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get("/", getTasks);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     tags: [Task]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Vehículo creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */

router.post("/", createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   patch:
 *     summary: Actualiza una tarea existente
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         _id: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: La tarea se actualizo exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

router.patch("/:id", updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         _id: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: la tarea fue eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         $ref: '#/components/responses/NotFound'
 */

router.delete("/:id", deleteTask);

export default router;
