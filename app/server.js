'use strict';

const Hapi = require('hapi');
const router = require('./routes/routes.js');

const server = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 8000 
});

server.route( router );

module.exports = server;