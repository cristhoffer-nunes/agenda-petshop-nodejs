const mysql = require('mysql')

const conexao = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Naruto@123',
  database : 'agenda-petshop'
});

module.exports = conexao