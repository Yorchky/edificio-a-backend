import bcrypt from 'bcrypt';
import usuariosModel from '../models/usuariosModelo.js';
import { generarToken } from '../helpers/autenticacion.js';

class UsuarioController {
  // Inicio de sesión del usuario (login)
  async login(req, res) {
    const { username, password } = req.body;

    const usuarioEncontrado = await usuariosModel.findOne({ username });
    if (!usuarioEncontrado) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const valida = await bcrypt.compare(password, usuarioEncontrado.passwordHash);
    if (!valida) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

    const token = generarToken({ id: usuarioEncontrado._id, rol: usuarioEncontrado.rol });
    res.json({ token, rol: usuarioEncontrado.rol });
  }

  // Registro de un nuevo usuario
  async register(req, res) {
    try {
      const { username, password, rol } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      const nuevoUsuario = await usuariosModel.create({ username, passwordHash, rol });
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al registrar usuario', error });
    }
  }
}

export default new UsuarioController();
