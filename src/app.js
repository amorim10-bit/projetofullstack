const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fornecedoresRoutes = require('./routes/fornecedoresRoutes');
const produtosRoutes = require('./routes/produtoRoutes');
const associacaoRoutes = require('./routes/associacaoRoutes');

const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));

app.use('/fornecedores', fornecedoresRoutes);
app.use('/produtos', produtosRoutes);
app.use('/associacoes', associacaoRoutes);

const PORT = 3001; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

