import Usuarios from "../schemas/usuarios.js";

class usuariosModelo {
  async create(usuario) {
    return await Usuarios.create(usuario);
  }

  async findOne(filtro) {
    return await Usuarios.findOne(filtro);
  }
}

export default new usuariosModelo();
