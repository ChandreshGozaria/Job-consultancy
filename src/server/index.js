const express = require('express');
const userRoutes = require('../routes/users');
const postRoutes = require('../routes/posts');
// const clientRoutes = require('../routes/clients');
require('../database')

const server = express();

//middleware
server.use(express.json());

server.use('/api/users', userRoutes);
server.use('/api/posts', postRoutes);

module.exports = server;