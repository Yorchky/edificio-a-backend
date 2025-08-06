import mongoose from 'mongoose';
import Aulas from '../schemas/aulas.js';

class aulasModelo {
  // Crear nueva aula
  async create(aula) {
    return await Aulas.create(aula);
  }

  // Obtener todas las aulas
  async find() {
    return await Aulas.find();
  }

  // Actualizar aula por ID
  async findByIdAndUpdate(id, data) {
    return await Aulas.findByIdAndUpdate(id, data, { new: true });
  }

  // Eliminar aula por ID
  async delete(id) {
    return await Aulas.findByIdAndDelete(id);
  }
}

export default new aulasModelo();
