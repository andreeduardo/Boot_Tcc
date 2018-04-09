-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Usuario (
codigo integer PRIMARY KEY,
cpf Varchar(50),
nome Varchar(50)
)

CREATE TABLE conversas (
codigo integer PRIMARY KEY,
cod_usuario integer,
blob_conversa blob,
dt_conversa DateTime,
sn_sucesso Char(1),
FOREIGN KEY(cod_usuario) REFERENCES Usuario (codigo)
)

