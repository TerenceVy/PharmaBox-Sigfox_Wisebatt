const router = require('express').Router();

router.use('/distributors', require('./distributor'));

module.exports = router;