const express = require('express');
const controller = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/login', authMiddleware.onlyLoggedOut, controller.form);
router.post('/login', authMiddleware.onlyLoggedOut, controller.login);
router.get('/logout', authMiddleware.onlyLoggedIn, controller.logout);
router.get('/token', authMiddleware.onlyLoggedOut, controller.token);

module.exports = router;
