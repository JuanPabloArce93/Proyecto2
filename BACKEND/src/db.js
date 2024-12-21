const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "proyecto",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
})

connection.connect(function (error) {
  if (error) {
    console.log("Error connecting to the database", error.message)
  } else {
    console.log("Connected to the database")
  }
})

module.exports = connection
