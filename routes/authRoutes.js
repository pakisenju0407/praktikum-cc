const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/user', authController.getAllUsers);
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
