import mongoose from 'mongoose';

const estacionamientoSchema = new mongoose.Schema({
  Lugar_ID: String,
  Tipo_Usuario_administrativo_discapacitados: String,
  estado: {
    type: String,
    enum: ['Libre', 'Ocupado'],
    default: 'Libre'
  }
}, { timestamps: true });

export default mongoose.model('estacionamiento', estacionamientoSchema);
 