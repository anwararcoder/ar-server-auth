// Old Code 
// const express = require('express');
// const jsonServer = require('json-server');

// const app = express();

// // Use the json-server middleware
// app.use('/api', jsonServer.router('db.json'));

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// New Code Run
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = 9000;

server.use(middlewares);
server.use(router);

server.listen(port);