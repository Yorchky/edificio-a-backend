import express from 'express';
import EstacionamientoController from '../controllers/estacionamientoController.js';
import { verificarToken, verificarRol } from '../helpers/autenticacion.js';

const router = express.Router();

// Obtener todos los espacios (se necesita token)
router.get('/', verificarToken, EstacionamientoController.getAll);

// Obtener un espacio por ID
router.get('/:id', verificarToken, EstacionamientoController.getById);

// Crear nuevo espacio (solo profesores pueden hacerlo)
router.post('/', verificarToken, verificarRol(['profesor']), EstacionamientoController.create);

// Eliminar un espacio por ID (solo profesores)
router.delete('/:id', verificarToken, verificarRol(['profesor']), EstacionamientoController.delete);

export default router;