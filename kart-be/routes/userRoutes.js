const express = require('express');

const userControllers = require('./../controllers/userControllers');
const protect = require('./../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(userControllers.registerUser);
router.route('/login').post(userControllers.authUser);
router.route('/profile').get(protect, userControllers.getUserProfile);

module.exports = router;