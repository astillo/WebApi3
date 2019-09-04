const express = require('express');
const productsRouter = require('../products/products-router.js')
const suppliersRouter = require('../suppliers/suppliers-router.js')

const server = express()
// middleware goes here

server.use(express.json())

server.use('/products', productsRouter)
server.use('/suppliers', suppliersRouter)

//routes go here
server.get('/', (req, res) => {
    res.status(201).json({ api: 'up' })
})

module.exports = server
