const mysql = require("mysql");

const connection = mysql.createConnection({
  connectionLimit: 13,
  host: "4.213.43.18",
  port: "3306",
  user: "isrbs",
  password: "isoft@1209ISZ",
  database: "isrbs",
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log("Connected to MySQL!");
    }
});   


module.exports= connection;
