import Estacionamiento from '../models/estacionamientoModelo.js';

class EstacionamientoController {
  // Obtener todos los espacios de estacionamiento
  async getAll(req, res) {
    try {
      const lugares = await Estacionamiento.find(); // Buscar todos los registros
      res.json(lugares);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener estacionamientos', error: error.message });
    }
  }
 
  // Obtener un solo espacio de estacionamiento por ID
  async getById(req, res) {
    try {
      const { id } = req.params; // Obtener ID desde la URL
      const espacio = await Estacionamiento.findById(id); // Buscar por ID

      if (!espacio) return res.status(404).json({ mensaje: 'Espacio no encontrado' });

      res.json(espacio);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar espacio', error: error.message });
    }
  }

  // Crear un nuevo espacio de estacionamiento
  async create(req, res) {
    try {
      const nuevoLugar = await Estacionamiento.create(req.body); // Crear nuevo documento con los datos enviados
      res.status(201).json(nuevoLugar);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear lugar de estacionamiento', error: error.message });
    }
  }

  // Eliminar un espacio de estacionamiento por ID
  async delete(req, res) {
    try {
      const { id } = req.params; // Obtener ID desde la URL
      const eliminado = await Estacionamiento.findByIdAndDelete(id); // Eliminar por ID

      if (!eliminado) return res.status(404).json({ mensaje: 'Lugar no encontrado' });

      res.json({ mensaje: 'Lugar eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar espacio', error: error.message });
    }
  }
}

export default new EstacionamientoController();