const express = require('express');
const controller = require('../controllers/home.controller');
const authMiddleware = require('../middlewares/auth');


const router = express.Router();

router.get('/', authMiddleware.onlyLoggedIn, controller.home);
router.get('/status', controller.status);

module.exports = router;
