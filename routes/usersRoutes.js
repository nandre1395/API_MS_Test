import express from "express";
const router = express.Router();

import { agregar, mostrar, eliminar, editar, mostrarUno } from "../controllers/userController.js";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Api para gestionar usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         id:
 *           type: string
 *           description: Id generado automáticamente por Mongo
 *         nombresUsuario:
 *           type: string
 *           description: Nombre completo del usuario
 *         celularUsuario:
 *           type: number
 *           description: Número de teléfono del usuario
 *       example:
 *         id: 644db806aa2082d626ded2c2
 *         nombresUsuario: Juan David
 *         celularUsuario: 365454465
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Agrega usuarios
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario agregado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Los campos nombresUsuario y celularUsuario son necesarios
 */

router.post("/", agregar);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: trae todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/", mostrar);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: trae un usuario por el id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del usuario a obtener
 *     responses:
 *       200:
 *         description: usuario encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: El usuario con el id indicado, no se encontró
 */

router.get("/:id", mostrarUno);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       404:
 *         description: El usuario con el id indicado no fue editado
 *
 */

router.put("/:id", editar);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina un usuario
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: id del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: El usuario con el id indicado no se pudo eliminar
 *
 */

router.delete("/:id", eliminar);

export default router;

