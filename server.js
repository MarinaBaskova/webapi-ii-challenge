const express = require('express');
const server = express();

// import posts router

const postsRouter = require('./posts/postsRouter.js');

server.use(express.json());

server.get('/', (req, res) => {
	res.send('<h2>Posts API</h2>');
});

// apply middleware for using posts router
server.use('/api/posts', postsRouter);

module.exports = server;
