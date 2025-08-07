import express from 'express';
import EstacionamientoController from '../controllers/estacionamientoController.js';
import { verificarToken, verificarRol } from '../helpers/autenticacion.js';

const router = express.Router();

// Obtener todos los espacios (requiere token)
router.get('/', verificarToken, EstacionamientoController.getAll);

router.get('/:id', verificarToken, EstacionamientoController.getById);


// Crear nuevo espacio (solo profesores)
router.post('/', verificarToken, verificarRol(['profesor']), EstacionamientoController.create);

export default router;
