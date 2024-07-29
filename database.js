const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'newroot',
  password: '1234',
  database: 'testdb'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

module.exports = db;
