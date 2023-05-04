
const {Client} = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'ClockData',
  password: '82465',
  port: 5432,
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
  .then(() => console.log('Tabela Data criada com sucesso!'))
  .catch(err => console.error('Erro ao criar a tabela Data:', err))
  .finally(() => client.end());
}

client.connect()
  .then(() => createDataTable())
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

  module.exports = {client}