import jwt from 'jsonwebtoken';

const SECRET_KEY = 'tu_clave_secreta';  // Cambia esto por una clave segura y mantenla confidencial

export function generarJWT(datos) {
  return jwt.sign({ data: datos }, SECRET_KEY, { expiresIn: '1h' });
}