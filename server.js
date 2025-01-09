const express = require('express')
const server = express()
const cors = require('cors')

server.use(cors())
server.use(express.json())

const host = process.env.HOST || "http://localhost"
const port = process.env.PORT || 3000

server.listen(port, (req, res) => {
    console.log(`Server running at ${host}:${port}`)
})
