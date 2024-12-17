const db = require('../services/db');

const Fornecedor = {
  create: (fornecedor, callback) => {
    const sql = `
      INSERT INTO fornecedores (nome_empresa, cnpj, endereco, telefone, email, contato_principal)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      fornecedor.nome_empresa,
      fornecedor.cnpj,
      fornecedor.endereco,
      fornecedor.telefone,
      fornecedor.email,
      fornecedor.contato_principal,
    ];
    db.query(sql, params, callback);
  },

  findByCNPJ: (cnpj, callback) => {
    const sql = 'SELECT * FROM fornecedores WHERE cnpj = ?';
    db.query(sql, [cnpj], callback);
  },
};

module.exports = Fornecedor;
