import express from 'express';
import AulasController from '../controllers/aulasController.js';
import { verificarToken, verificarRol } from '../helpers/autenticacion.js';

const router = express.Router();

// Obtener todas las aulas (requiere estar autenticado)
router.get('/', verificarToken, AulasController.getAll);

// Obtener un aula específica por su ID
router.get('/:id', verificarToken, AulasController.getById);

// Crear aula (solo profesores pueden hacerlo)
router.post('/', verificarToken, verificarRol(['profesor']), AulasController.create);

// Actualizar aula (solo profesores)
router.put('/:id', verificarToken, verificarRol(['profesor']), AulasController.update);

// Eliminar aula (solo profesores)
router.delete('/:id', verificarToken, verificarRol(['profesor']), AulasController.delete);

export default router;
