const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "password",
    database: "scrim",
});

module.exports = pool;
