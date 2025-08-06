import express from 'express';
import AulasController from '../controllers/aulasController.js';
import { verificarToken, verificarRol } from '../helpers/autenticacion.js';

const router = express.Router();

// Obtener todas las aulas (requiere token)
router.get('/', verificarToken, AulasController.getAll);

// Actualizar aula (solo profesores)
router.put('/:id', verificarToken, verificarRol(['profesor']), AulasController.update);

// Crear aula (solo profesores)
router.post('/', verificarToken, verificarRol(['profesor']), AulasController.create);

// Eliminar aula (solo profesores)
router.delete('/:id', verificarToken, verificarRol(['profesor']), AulasController.delete);

export default router;