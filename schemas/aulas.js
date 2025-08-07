import mongoose from 'mongoose';

const aulasSchema = new mongoose.Schema({
  Nombre: String,
  Profesor: String,
  Horarios: [
    {
      dia: String,
      inicio: String,
      fin: String,
      materia: String
    }
  ],
  estadoManual: {
    type: String, 
    enum: ['Libre', 'Ocupado'],
    default: null
  },
  ultimoCambioManual: {
    type: Date,
    default: null
  }
}, { timestamps: true });

export default mongoose.model('aulas', aulasSchema);