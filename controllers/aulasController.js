
import aulasModel from '../models/aulasModelo.js';

function estaEnClase(horaActual, inicio, fin) {
  const toMinutes = (h) => {
    const [horas, minutos] = h.split(":").map(Number);
    return horas * 60 + minutos;
  };
  const actual = toMinutes(horaActual);
  return actual >= toMinutes(inicio) && actual <= toMinutes(fin);
}

class AulasController {
  // Obtener todas las aulas con su estado dinámico
  async getAll(req, res) {
    try {
      const aulas = await aulasModel.find();
      const ahora = new Date();
      const diaActual = ahora.toLocaleString('en-US', { weekday: 'long' });
      const horaActual = ahora.toTimeString().slice(0, 5);

      const aulasConEstado = aulas.map((aula) => {
        let estadoCalculado = 'Libre';
        for (const horario of aula.Horarios) {
          if (horario.dia === diaActual && estaEnClase(horaActual, horario.inicio, horario.fin)) {
            estadoCalculado = 'Ocupado';
            break;
          }
        }

        let estadoFinal = estadoCalculado;
        if (aula.estadoManual && aula.ultimoCambioManual) {
          const tiempo = Date.now() - new Date(aula.ultimoCambioManual).getTime();
          if (tiempo < 2 * 60 * 60 * 1000) estadoFinal = aula.estadoManual;
        }

        return {
          ...aula.toObject(),
          estado: estadoFinal
        };
      });

      res.json(aulasConEstado);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener aulas', error });
    }
  }

  // Actualizar el estado de un aula de forma manual
  async update(req, res) {
    try {
      const { id } = req.params;
      const { estado, ...otrosDatos } = req.body;
      const actualizacion = { ...otrosDatos };

      if (estado) {
        actualizacion.estadoManual = estado;
        actualizacion.ultimoCambioManual = new Date();
      }

      const aula = await aulasModel.findByIdAndUpdate(id, actualizacion, { new: true });
      if (!aula) return res.status(404).json({ mensaje: 'Aula no encontrada' });

      res.json(aula);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar aula', error });
    }
  }

  // Crear una nueva aula
  async create(req, res) {
    try {
      const nuevaAula = await aulasModel.create(req.body);
      res.status(201).json(nuevaAula);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear aula', error });
    }
  }
  // Obtener un aula por ID
async getById(req, res) {
  try {
    const { id } = req.params;
    const aula = await aulasModel.findById(id);
    if (!aula) return res.status(404).json({ mensaje: 'Aula no encontrada' });

    res.json(aula);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al buscar aula', error });
  }
}

  // Eliminar un aula
  async delete(req, res) {
    try {
      const { id } = req.params;
      const aulaEliminada = await aulasModel.delete(id);
      if (!aulaEliminada) return res.status(404).json({ mensaje: 'Aula no encontrada' });

      res.json({ mensaje: 'Aula eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar aula', error });
    }
  }
}

export default new AulasController();