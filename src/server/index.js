const express = require('express');
const userRoutes = require('../routes/users');
const postRoutes = require('../routes/posts');
const noteRoutes = require('../routes/notes');
require('../database')

const server = express();

//middleware
server.use(express.json());

server.use('/api/users', userRoutes);
server.use('/api/posts', postRoutes);
server.use('/api/notes', noteRoutes);

module.exports = server;