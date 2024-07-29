
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');
 
// Importa as rotas

const entregaRoutes = require('./routes/entregaRoutes');

const estadoRoutes = require('./routes/estadoRoutes');

const pagamentoRoutes = require('./routes/pagamentoRoutes');

const produtoRoutes = require('./routes/produtoRoutes');

const usuarioRoutes = require('./routes/usuarioRoutes');

const loginRoutes = require('./routes/loginRoutes');
 
// Cria uma instância do Express

const app = express();

const port = process.env.PORT || 3001;
 
// Middleware

app.use(cors()); // Permite requisições de diferentes origens

app.use(bodyParser.json()); // Permite parsing de JSON no corpo das requisições
 
// Rotas

app.use('/api/entregas', entregaRoutes);

app.use('/api/estados', estadoRoutes);

app.use('/api/pagamentos', pagamentoRoutes);

app.use('/api/produtos', produtoRoutes);

app.use('/api/usuarios', usuarioRoutes);

app.use('/api/logins', loginRoutes);
 
// Endpoint de teste

app.get('/', (req, res) => {

  res.send('Servidor Express está funcionando!');

});
 
// Inicializa o servidor

app.listen(3001, () => {

  console.log(`Servidor rodando na porta ${3001}`);

});

 