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

router.post('/', (req, res) => {
	const newPost = req.body;
	if (!newPost.hasOwnProperty('title') || !newPost.hasOwnProperty('contents')) {
		res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
	}
	db
		.insert(newPost)
		.then((idOfNewPost) => {
			res.status(201).json(idOfNewPost);
		})
		.catch((err) => {
			res.status(500).json({ error: 'There was an error while saving the post to the database' });
		});
});

router.delete('/:id', (req, res) => {
	db
		.remove(req.params.id)
		.then((numOfPostDeleted) => {
			if (!numOfPostDeleted) {
				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
			} else {
				res.status(204).end();
			}
		})
		.catch((err) => {
			res.status(500).json({ error: 'The post could not be removed' });
		});
});

module.exports = router;

/*




*/
