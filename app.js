import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';

// Importación de rutas
import routesAulas from './routes/aulas.js';
import routesEstacionamiento from './routes/estacionamiento.js';
import routesUsuarios from './routes/usuarios.js';
import dbConfig from './config/dbConfig.js';

const app = express();

// Middleware para aceptar peticiones JSON y permitir CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Definición de rutas base
app.use('/aulas', routesAulas);
app.use('/estacionamiento', routesEstacionamiento);
app.use('/usuarios', routesUsuarios);

// Puerto desde variables de entorno o valor por defecto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor arriba en puerto: ${PORT}`));

// Cierre de conexión cuando el servidor se detiene
process.on('SIGINT', async () => {
  await dbConfig.cerrarConexion();
  process.exit(0);
});

