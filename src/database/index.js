require('dotenv').config()
const {Client} = require('pg')
console.log(process.env.DATABASE_USER);

const client = new Client({
  user: process.env.DATABASE_USER ,
  host: process.env.DATABASE_HOST ,
  database: process.env.DATABASE_NAME ,
  password: process.env.DATABASE_PASSWORD ,
  // port: 5432,

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