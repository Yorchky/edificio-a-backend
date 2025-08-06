# Proyecto Final - Gestión de Aulas y Estacionamiento

Este proyecto es una API backend desarrollada con Node.js, Express y MongoDB Atlas. Permite gestionar el estado de ocupación de aulas y espacios de estacionamiento en tiempo real, con autenticación por roles (profesor/estudiante) mediante JSON Web Tokens (JWT).

---

## Tecnologías utilizadas

- Node.js + Express
- MongoDB Atlas + Mongoose
- JSON Web Tokens (JWT)
- Bcrypt (encriptación de contraseñas)
- dotenv (variables de entorno)

---

## Instrucciones de instalación

1. Clona este repositorio:
```bash
git clone https://github.com/Yorchky/edificio-a-backend.git
cd edificio-a-backend
Instala las dependencias:

bash
Copiar
Editar
npm install
Crea un archivo .env con las siguientes variables:

env
Copiar
Editar
PORT=4000
USER_DB=TU_USUARIO_ATLAS
PASS_DB=TU_PASSWORD_ATLAS
SERVER_DB=tucluster.mongodb.net
JWT_TOKEN_SECRET=clave-secreta
Ejecuta el servidor:

bash
Copiar
Editar
node app.js
Endpoints disponibles
Usuarios (/usuarios)
POST /register: Registrar nuevo usuario

POST /login: Iniciar sesión y obtener token JWT

Aulas (/aulas)
GET /: Obtener todas las aulas (requiere token)

POST /: Crear aula (solo profesores)

PUT /:id: Actualizar aula por ID (solo profesores)

DELETE /:id: Eliminar aula por ID (solo profesores)

Estacionamiento (/estacionamiento)
GET /: Obtener todos los espacios (requiere token)

POST /: Crear nuevo espacio (solo profesores)

Estructura del proyecto
arduino
Copiar
Editar
├── app.js
├── config/
│   └── dbConfig.js
├── controllers/
│   ├── aulasController.js
│   ├── estacionamientoController.js
│   └── usuarioController.js
├── helpers/
│   └── autenticacion.js
├── models/
│   ├── aulasModelo.js
│   ├── estacionamientoModelo.js
│   └── usuariosModelo.js
├── routes/
│   ├── aulas.js
│   ├── estacionamiento.js
│   └── usuarios.js
├── schemas/
│   ├── aulas.js
│   ├── estacionamiento.js
│   └── usuarios.js
├── .env.example
└── README.md
Autores
Kevin Eduardo / Yorchky

Universidad Tecnológica El Retoño

Bases de Datos para Cómputo en la Nube – 5to cuatrimestre
