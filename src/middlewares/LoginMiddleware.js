import jwt from 'jsonwebtoken';
 
const LoginMiddleware = (req, res, next) => {

  const token = req.header('x-auth-token');
 
  if (!token) {

    return res.status(401).json({ message: 'Nenhum token, autorização negada' });

  }
 
  try {

    const decoded = jwt.verify(token, 'seuSegredoJWT');

    req.usuario = decoded;

    next();

  } catch (error) {

    res.status(401).json({ message: 'Token inválido' });

  }

};

export default LoginMiddleware;


 