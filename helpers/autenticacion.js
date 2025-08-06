import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_TOKEN_SECRET || 'clave_super_secreta';

// Genera un token con duración de 4 horas
export function generarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '4h' });
}

// Verifica que el token JWT sea válido
export function verificarToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'Token no provisto' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ mensaje: 'Token inválido' });
  }
}

// Verifica si el usuario tiene uno de los roles permitidos
export function verificarRol(rolesPermitidos) {
  return (req, res, next) => {
    if (!req.user || !rolesPermitidos.includes(req.user.rol)) {
      return res.status(403).json({ mensaje: 'No autorizado para esta acción' });
    }
    next();
  };
}