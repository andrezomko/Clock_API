
# ⏰ Clock API 


API com um endpoint que recebe os parâmetros `:hour` e `:minute` e retorna o ângulo formado entre os dois ponteiros do relógio.
## 🏛 Variáveis de ambiente

Este projeto é executado em um ambiente containerizado (Docker);

Antes de rodar o programa, você precisa adicionar as seguintes variáveis de ambiente ao seu arquivo `.env`:


`DB_USER`
- Deve ter o mesmo valor que variável POSTGRES_PASSWORD, presente no arquivo docker-compose.yml

`DB_HOST` 
- Deve ter o valor fixo de "db"

`DB_NAME` 
- Deve ter o mesmo valor que as variáveis DB_USER (.env) e POSTGRES_USER (docker-compose.yml). As 3 variáves devem ter o mesmo valor

`DB_PASSWORD` 
- Deve ter o mesmo valor que variável POSTGRES_PASSWORD, presente no arquivo docker-compose.yml

 





## 🛠 Rodando o programa


🚀 Para rodar o programa abra seu terminal no diretório raiz do projeto e digite o seguinte comando:

`npm start`



🚀 Para enviar os valores de :hour e :minute para que a API faça o cálculo do ângulo entre os ponteiros do relógio, abra o terminal no diretório raiz e execute o seguinte comando:

` curl localhost:5000/api/clock/HOUR/MINUTE `   

- Substitua o campo HOUR pelo valor desejado para as horas (0-11);

- Substitua o campo MINUTE pelo valor desejado para os minutos (0-59);


🖐🏼 Para encerrar o programa abra seu terminal no diretório raiz do projeto e digite o seguinte comando:


`npm stop`

## Testes unitários (Jest)

Para executar os testes unitários abra seu terminal na pasta raiz do projeto e digite o seguinte comando: 

```bash
  npm test
```


## 🛠  Tecnologias Utilizadas

⚙️ `axios: 1.4.0`

- Biblioteca JavaScript para realizar solicitações HTTP.

⚙️  `body-parser: 1.20.2`
- Middleware para processar o corpo das solicitações HTTP em Node.js

⚙️  `dotenv: 16.0.3`
- Biblioteca para carregar variáveis de ambiente do arquivo .env

⚙️ `express: 4.18.2`
- Framework web para Node.js usado para criar aplicativos e APIs.

⚙️ `jest: 29.5.0`
- Estrutura de teste para JavaScript.

⚙️ `pg: 8.10.0`
- Cliente PostgreSQL para Node.js que permite interação com um banco de dados PostgreSQL.

⚙️ `docker: 23.0.5`

- Plataforma de "open source" para empacotar e executar aplicativos em containeres
    
     

    
