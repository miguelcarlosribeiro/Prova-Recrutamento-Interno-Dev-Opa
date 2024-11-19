const express = require('express');
const router = express.Router();
const {createUser, login } = require('../controllers/authController');

router.post('/createUser', createUser);
router.post('/login', login);

module.exports = router;