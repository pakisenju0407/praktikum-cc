const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
// const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

// router.use(authenticationMiddleware); // Middleware for authentication

// Endpoint untuk mendapatkan semua todo
router.get('/', todoController.getAllTodos);

// Endpoint untuk membuat todo baru
router.post('/', todoController.createTodo);

// Endpoint untuk mendapatkan detail todo berdasarkan ID
router.get('/:id', todoController.getTodoById);

// Endpoint untuk mengubah todo berdasarkan ID
router.put('/:id', todoController.updateTodo);

// Endpoint untuk menghapus todo berdasarkan ID
router.delete('/:id', todoController.deleteTodo);

// Endpoint untuk menghapus semua todo
router.delete('/', todoController.deleteAllTodos);

module.exports = router;