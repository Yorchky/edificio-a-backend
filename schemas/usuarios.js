
import mongoose from 'mongoose';

const usuariosSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  passwordHash: String,
  rol: {
    type: String,
    enum: ['estudiante', 'profesor'],
    default: 'estudiante'
  }
}, { timestamps: true });

export default mongoose.model('users', usuariosSchema);
 