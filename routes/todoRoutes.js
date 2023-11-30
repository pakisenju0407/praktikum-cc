const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

router.use(authenticationMiddleware);

router.get('/', todoController.getAllTodos);

router.post('/', todoController.createTodo);

router.get('/:id', todoController.getTodoById);

router.put('/:id', todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);

router.delete('/', todoController.deleteAllTodos);

module.exports = router;
