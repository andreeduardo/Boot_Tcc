// carrega o módulo mysql
var mysql = require('mysql2');
var express = require('express');
var app = express();
// cliente de conexão
var conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database : 'bd_boot'
});

conexao.connect(function(err) {
  if (!!err) {
      console.log('Erro na conexão');      
  } else {
      console.log("Sucesso na conexão");
  }
});

app.get('/', function(req, resp) {
    conexao.query(' select * from usuarios', function(err, rows, fields) {
        if (!!err) {
            console.log('Erro na Query');
        }
        else {
           resp.json({
            success: true,
            message: "Olá " + rows[0].login + "\n Sua senha é " + rows[0].senha
        });
        }
    });
})