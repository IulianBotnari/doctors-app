const mysql = require('mysql2')

// Create a new connection to the MySQL server

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to database', err)
    } else {
        console.log('Connected to the database')
    }
})