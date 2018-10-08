var mysql = require('mysql');

var con = mysql.createConnection({
  host: "HOST",
  user: "USER",
  password: "PASSWORD",
  database: "DATABASE"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE voter (id INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (id), user text NOT NULL, lastvote text NOT NULL, userid text NOT NULL, usuario text NOT NULL, language text NOT NULL,  wifkey text NOT NULL)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created"); //
  });
});
