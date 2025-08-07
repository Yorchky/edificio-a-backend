import mongoose from 'mongoose';
import 'dotenv/config';

class dbClient {
  constructor() {
    this.conectarBaseDatos();
  }
 
  // Establece conexión con MongoDB
  async conectarBaseDatos() {
    try {
      const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/Integradora?retryWrites=true&w=majority&appName=Cluster0`;
      await mongoose.connect(queryString);
      console.log('Conectado a MongoDB Atlas');
    } catch (error) {
      console.error('Error conectando a MongoDB:', error);
    }
  }

  // Cierra la conexión a MongoDB
  async cerrarConexion() {
    try {
      await mongoose.disconnect();
      console.log('Conexión cerrada correctamente');
    } catch (error) {
      console.error('Error cerrando la conexión:', error);
    }
  }
}

export default new dbClient();
