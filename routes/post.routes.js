const Router = require('express');
const router = new Router();
const postController = require('../controller/post.controller');

router.post('/post', postController.createPost); // Create
router.get('/posts', postController.getPosts); // Read
router.get('/post/:id', postController.getPost);
router.put('/post', postController.updatePost); // Update
router.delete('/post/:id', postController.deletePost); // Delete

module.exports = router