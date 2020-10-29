require('dotenv').config()

const express = require('express')

const path = require('path')

const port = process.env.PORT || 5000

const server = express()

server.use(express.json())

//
server.use(express.static(path.join(__dirname, 'client/build')))

//endpoints
server.get('/api', (req, res) => {
    res.json({ message: "API is up" })
})

//fallback endpoint
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

//server listening
server.listen(port, () => {
    console.log(`\n*** Server listening on http://localhost:${port} ***`)
})