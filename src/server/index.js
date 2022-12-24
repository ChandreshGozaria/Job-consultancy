const express = require('express');
const adminRoutes = require('../routes/admins');
// const recruiterRoutes = require('../routes/recruiters');
// const clientRoutes = require('../routes/clients');
require('../database')

const server = express();

//middleware
server.use(express.json());

server.use('/api/admins', adminRoutes);
// server.use('/api/recruiters', recruiterRoutes);
// server.use('/api/clients', clientRoutes);

module.exports = server;