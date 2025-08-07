
import Usuarios from '../schemas/usuarios.js';

class usuariosModelo {
  // Crear nuevo usuario
  async create(usuario) {
    return await Usuarios.create(usuario);
  }

  // Buscar un usuario por algún criterio
  async findOne(filtro) {
    return await Usuarios.findOne(filtro);
  }
}

export default new usuariosModelo();
