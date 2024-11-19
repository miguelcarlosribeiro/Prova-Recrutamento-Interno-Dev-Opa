const mongoose = require('mongoose');

//  Conexão com o banco de dados
const connectdb = async () => {
  try {
    console.log(process.env.MONGO_URI)
    await mongoose.connect('mongodb://localhost:27017/testeopa', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       });
    console.log('MongoDB conectado');
  }
  catch (error) {
    console.error('erro de conexão MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = connectdb;