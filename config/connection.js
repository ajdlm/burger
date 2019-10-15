var mysql = require("mysql");
var password = require("./password.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: password.password,
    database: "burgers_db"
});

connection.connect(function(err) {
if (err) {
    console.log("Error connecting: " + err.stack);
    return;
}

console.log("Connected as id " + connection.threadId);
});

module.exports = connection;