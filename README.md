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

```
2. Instala las dependencias:
```
npm install

```
3. Crea un archivo .env con las siguientes variables:
```
PORT=4000
USER_DB=TU_USUARIO_ATLAS
PASS_DB=TU_PASSWORD_ATLAS
SERVER_DB=tucluster.mongodb.net
JWT_TOKEN_SECRET=clave-secreta
```
4. Ejecuta el servidor:
```
node app.js
```

## Estructura Del Proyecto

```md
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
```md
