const mongoose = require("mongoose");
const DATABASECONNECTION = process.env.DATABASECONNECTION;

async function connect() {
  try {
    await mongoose.connect(DATABASECONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.log(`Erro ao conectar com o banco de dados: ${error}`);
  }
}
