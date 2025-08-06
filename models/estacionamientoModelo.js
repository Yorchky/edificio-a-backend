import mongoose from 'mongoose';
import Estacionamiento from '../schemas/estacionamiento.js';

class estacionamientoModelo {
  // Crear nuevo lugar de estacionamiento
  async create(espacio) {
    return await Estacionamiento.create(espacio);
  }

  // Obtener todos los lugares
  async find() {
    return await Estacionamiento.find();
  }
}

export default new estacionamientoModelo();
