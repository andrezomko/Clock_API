const {Client} = require('pg')
const path = require('path')

require("dotenv").config({
path: path.resolve(__dirname,'../../.env')
})


console.log(`DBUSER C ESSE VALOR:${process.env.DB_USER}`);
console.log(`DBHOST C ESSE VALOR:${process.env.DB_HOST}`);
console.log(`DBNAME C ESSE VALOR:${process.env.DB_NAME}`);
console.log(`DBPSSW C ESSE VALOR:${process.env.DB_PASSWORD}`);



const client = new Client({
  user: "teste",
  host: "db",
  database: "teste" ,
  password: "654321",
});

function createDataTable(){
  client.query(`
    CREATE TABLE IF NOT EXISTS Data (
      id SERIAL PRIMARY KEY,
      hour INTEGER NOT NULL,
      minute INTEGER NOT NULL,
      angle INTEGER NOT NULL,
      date TIMESTAMP NOT NULL
    )
`)
  .catch(err => console.error('Erro ao criar a tabela Data:', err))
}

client.connect()
  .then(() => createDataTable())
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));



  process.on('SIGTERM', () => {
    console.info('Encerrando a conexão com o banco de dados...');
    client.end()
      .then(() => {
        console.info('Conexão com o banco de dados encerrada com sucesso.');
        process.exit(0);
      })
      .catch(err => {
        console.error('Erro ao encerrar a conexão com o banco de dados:', err);
        process.exit(1);
      });
  });
  
  process.on('SIGINT', () => {
    console.info(' Encerrando a conexão com o banco de dados...');
    client.end()
      .then(() => {
        console.info('Conexão com o banco de dados encerrada com sucesso.');
        process.exit(0);
      })
      .catch(err => {
        console.error('Erro ao encerrar a conexão com o banco de dados:', err);
        process.exit(1);
      });
  });

  module.exports = {client}