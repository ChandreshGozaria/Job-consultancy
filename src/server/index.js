const express = require('express');
const userRoutes = require('../routes/users');
// const recruiterRoutes = require('../routes/recruiters');
// const clientRoutes = require('../routes/clients');
require('../database')

const server = express();

//middleware
server.use(express.json());

server.use('/api/users', userRoutes);
// server.use('/api/recruiters', recruiterRoutes);
// server.use('/api/clients', clientRoutes);

module.exports = server;