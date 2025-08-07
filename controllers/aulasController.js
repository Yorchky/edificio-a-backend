import aulasModel from '../models/aulasModelo.js';

// Función auxiliar para verificar si una hora está dentro de un rango
function estaEnClase(horaActual, inicio, fin) {
  const toMinutes = (h) => {
    const [horas, minutos] = h.split(":").map(Number);
    return horas * 60 + minutos;
  };
  const actual = toMinutes(horaActual);
  return actual >= toMinutes(inicio) && actual <= toMinutes(fin);
}

class AulasController {
  // Obtener todas las aulas y calcular su estado (Libre/Ocupado)
  async getAll(req, res) {
    try {
      const aulas = await aulasModel.find();
      const ahora = new Date();
      const diaActual = ahora.toLocaleString('en-US', { weekday: 'long' });
      const horaActual = ahora.toTimeString().slice(0, 5);

      // Recorrer todas las aulas para determinar su estado actual
      const aulasConEstado = aulas.map((aula) => {
        let estadoCalculado = 'Libre';

        // Revisar si en este momento el aula está ocupada por algún horario
        for (const horario of aula.Horarios) {
          if (horario.dia === diaActual && estaEnClase(horaActual, horario.inicio, horario.fin)) {
            estadoCalculado = 'Ocupado';
            break;
          }
        }

        // Si hay un estado manual reciente, se respeta
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
      res.status(500).json({ mensaje: 'Error al obtener aulas', error: error.message });
    }
  }

  // Obtener un aula específica por su ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const aula = await aulasModel.findById(id);
      if (!aula) return res.status(404).json({ mensaje: 'Aula no encontrada' });

      res.json(aula);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar aula', error: error.message });
    }
  }

  // Crear una nueva aula
  async create(req, res) {
    try {
      const nuevaAula = await aulasModel.create(req.body);
      res.status(201).json(nuevaAula);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al crear aula', error: error.message });
    }
  }

  // Actualizar una aula (y su estado manual si se QUIERE)
  async update(req, res) {
    try {
      const { id } = req.params;
      const { estado, ...otrosDatos } = req.body;
      const actualizacion = { ...otrosDatos };

      // Si se manda estado manual se actualiza
      if (estado) {
        actualizacion.estadoManual = estado;
        actualizacion.ultimoCambioManual = new Date();
      }

      const aula = await aulasModel.findByIdAndUpdate(id, actualizacion, { new: true });
      if (!aula) return res.status(404).json({ mensaje: 'Aula no encontrada' });

      res.json(aula);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al actualizar aula', error: error.message });
    }
  }

  // Eliminar una aula por su ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const aulaEliminada = await aulasModel.findByIdAndDelete(id);
      if (!aulaEliminada) return res.status(404).json({ mensaje: 'Aula no encontrada' });

      res.json({ mensaje: 'Aula eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar aula', error: error.message });
    }
  }
}

export default new AulasController();