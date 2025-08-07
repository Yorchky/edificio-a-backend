import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();

// Ruta para login
router.post('/login', UsuarioController.login);

// Ruta para registrar usuario
router.post('/register', UsuarioController.register);

export default router; 