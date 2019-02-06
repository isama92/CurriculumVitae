const path = require('path');
const express = require('express');
const homeRoutes = require('./home.route');
const authRoutes = require('./auth.route');

const router = express.Router();

router.use('/', homeRoutes);
router.use('/', authRoutes);

router.use('/', express.static(path.join(__dirname, '..', '..', '..', '..', 'client', 'build')));

module.exports = router;
