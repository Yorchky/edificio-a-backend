
import Usuarios from '../schemas/usuarios.js';

class usuariosModelo {
  // Crear nuevo usuario
  async create(usuario) {
    return await Usuarios.create(usuario);
  }

  // Buscar un usuario con filtro (ej: por nombre de usuario)
  async findOne(filtro) {
    return await Usuarios.findOne(filtro);
  }
}

export default new usuariosModelo();
