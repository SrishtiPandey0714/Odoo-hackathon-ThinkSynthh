const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

router.post('/register', userController.registerUser); // Signup
router.post('/login', userController.loginUser);       // Login
router.get('/all', userController.getAllUsers);        // Fetch all users

module.exports = router;
