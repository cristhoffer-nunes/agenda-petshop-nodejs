const mysql = require('mysql')

const conexao = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : 'agenda-petshop'
});

module.exports = conexao
