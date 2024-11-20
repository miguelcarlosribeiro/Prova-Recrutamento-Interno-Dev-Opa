const jwt = require('jsonwebtoken');

// middleware de validação token 
module.exports = (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) return res.status(401).json({ message: 'Acesso negado.' });

  try {
    
    jwtToken = process.env.JWT_SECRET
    console.log(jwtToken)
    const decoded = jwt.verify(token, jwtToken);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token inválido.' });
  }
};