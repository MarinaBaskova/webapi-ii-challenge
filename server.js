const express = require('express');
const server = express();
const cors = require('cors');

// import posts router

const postsRouter = require('./posts/postsRouter.js');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
	res.send('<h2>Posts API</h2>');
});

// apply middleware for using posts router
server.use('/api/posts', postsRouter);

module.exports = server;
