const express = require('express');

const server = express()
// middleware goes here

server.use(express.json())

//routes go here
server.get('/', (req, res) => {
    res.status(201).json({ api: 'up' })
})

module.exports = server
