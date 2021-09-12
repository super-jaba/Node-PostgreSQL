const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

router.post('/user', userController.createUser); // Create
router.get('/users', userController.getUsers); // Read
router.get('/user/:id', userController.getOneUser); // Read
router.put('/user', userController.updateUser); // Update
router.delete('/user/:id', userController.deleteUser); // Delete

module.exports = router