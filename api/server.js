const express = require('express');

const server = express()

server.get('/', (req, res) => {
    res.status(201).json({ api: 'up' })
})

module.exports = server
