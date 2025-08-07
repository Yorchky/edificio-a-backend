import mongoose from 'mongoose';
import Aulas from '../schemas/aulas.js';

class aulasModelo {
  // Crear una nueva aula en la base de datos
  async create(aula) {
    return await Aulas.create(aula);
  }

  // Obtener todas las aulas
  async find() {
    return await Aulas.find();
  }

  // Buscar un aula por su ID
  async findById(id) {
    return await Aulas.findById(id);
  }

  // Actualizar un aula por ID
  async findByIdAndUpdate(id, data) {
    return await Aulas.findByIdAndUpdate(id, data, { new: true });
  }
 
  // Eliminar un aula por ID
  async findByIdAndDelete(id) {
    return await Aulas.findByIdAndDelete(id);
  }
}

export default new aulasModelo();