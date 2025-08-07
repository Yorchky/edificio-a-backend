import mongoose from 'mongoose';
import Estacionamiento from '../schemas/estacionamiento.js';

class estacionamientoModelo {
  // Crear un nuevo espacio de estacionamiento
  async create(espacio) {
    return await Estacionamiento.create(espacio);
  }

  // Obtener todos los espacios de estacionamiento
  async find() {
    return await Estacionamiento.find();
  }

  // Buscar un espacio por ID
  async findById(id) {
    return await Estacionamiento.findById(id);
  }
 
  // Eliminar un espacio por ID
  async findByIdAndDelete(id) {
    return await Estacionamiento.findByIdAndDelete(id);
  }
}

export default new estacionamientoModelo();