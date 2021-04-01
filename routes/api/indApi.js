const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');

router.use('/notes', apiRoutes);

module.exports = router;
