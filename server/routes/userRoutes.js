const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);
router.get('/current', validateToken, userControllers.currentUser);
router.get('/logout', validateToken, userControllers.logoutUser);

module.exports = router;