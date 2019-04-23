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

module.exports = router;

/* When the client makes a GET request to /api/posts:




 GET BY ID

When the client makes a GET request to /api/posts/:id:

If the post with the specified id is not found:

return HTTP status code 404 (Not Found).
return the following JSON object: { message: "The post with the specified ID does not exist." }.
If there's an error in retrieving the post from the database:

cancel the request.
respond with HTTP status code 500.
return the following JSON object: { error: "The post information could not be retrieved." }.
*/
