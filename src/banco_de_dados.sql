CREATE DATABASE IF NOT EXISTS gestao;

USE gestao;

CREATE TABLE fornecedores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_empresa VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) UNIQUE NOT NULL,
  endereco TEXT NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contato_principal VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_produto VARCHAR(255) NOT NULL,
  codigo_barras VARCHAR(50) UNIQUE NOT NULL,
  descricao TEXT NOT NULL,
  quantidade INT NOT NULL,
  categoria VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produto_fornecedor (
  produto_id INT NOT NULL,
  fornecedor_id INT NOT NULL,
  PRIMARY KEY (produto_id, fornecedor_id),
  FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
  FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id) ON DELETE CASCADE
);
