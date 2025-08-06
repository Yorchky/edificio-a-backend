import Estacionamiento from '../models/estacionamientoModelo.js';

class EstacionamientoController {
  // Obtener todos los espacios de estacionamiento
  async getAll(req, res) {
    try {
      const lugares = await Estacionamiento.find();
      res.json(lugares);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener estacionamientos', error });
    }
  }

  // Crear un nuevo espacio de estacionamiento
  async create(req, res) {
    try {
      const nuevoLugar = await Estacionamiento.create(req.body);
      res.status(201).json(nuevoLugar);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear lugar de estacionamiento', error });
    }
  }
}

export default new EstacionamientoController();