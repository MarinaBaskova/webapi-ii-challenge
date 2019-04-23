const express = require('express');
const db = require('../data/db.js');

const router = express.Router();

// url begins with /api/posts

router.get('/', (req, res) => {
	db
		.find()
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch((err) => {
			res.status(500).json({ error: 'The posts information could not be retrieved.' });
		});
});

router.get('/:id', (req, res) => {
	db
		.findById(req.params.id)
		.then((post) => {
			console.log('GET by ID ', post);
			if (post.length === 0) {
				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
			} else {
				res.status(200).json(post);
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The post information could not be retrieved.' });
		});
});

module.exports = router;

/* When the client makes a GET request to /api/posts:


*/
