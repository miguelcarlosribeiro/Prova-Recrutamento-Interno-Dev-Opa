const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//Metodo de criação do cliente
exports.createUser = async (req, res) => { 
  const {username, password} = req.body;

  try {
    const existingUser = await User.findOne({username});
    if(existingUser) return res.status(400).json({ message: 'Usuario já existe' });
    const user = new User({username, password});
    await user.save();
    res.status(200).json({ message: 'usuario criado com sucesso' });
  } catch (error) {
    res.status(400).json({ message:error.message});
  }};
  //metodo de login
  exports.login = async (req, res) => {
  jwtToken = process.env.JWT_SECRET
  const {username, password} = req.body
  try {
    const user = await User.findOne({username});
    if(!user) return res.status(400).json({ message: 'Usuario incorreto' });
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) return res.status(400).json({ message: 'Username or password is incorrect' });
    const token = jwt.sign({ id: user._id }, jwtToken, { expiresIn: '1h' });
    res.json({ token });
    } catch (error) {
    res.status(400).json({ message: error.message });
  }};

