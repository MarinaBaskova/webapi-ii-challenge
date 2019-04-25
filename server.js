const express = require('express');
const helmet = require('helmet');
const path = require('path');
const server = express();
const cors = require('cors');

// import posts router

const postsRouter = require('./posts/postsRouter.js');

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.get('/', (req, res) => {
// 	res.status(200).json({ message: process.env.SW });
// });

// if (process.env.NODE_ENV === 'production') {
// Serve any static files
server.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
server.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
// }

// server.get('/', (req, res) => {
// 	if (process.env.NODE_ENV === 'production') {
// 		// Serve any static files
// 		app.use(express.static(path.join(__dirname, 'client/build')));

// 		// Handle React routing, return all requests to React app
// 		app.get('*', function(req, res) {
// 		  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// 		});

// }});

// apply middleware for using posts router
server.use('/api/posts', postsRouter);

module.exports = server;
