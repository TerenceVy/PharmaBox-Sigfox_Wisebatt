const router = require('express').Router();

const DistributorController = require('../controllers/distributor');
const response = require('../manager/response').getDefaultResponseHandler;

router.put('/', (req, res) => DistributorController.update(req.body, response.bind(null, req, res), req));
router.get('/', (req, res) => DistributorController.getAll(response.bind(null, req, res), req));
router.post('/', (req, res) => DistributorController.create(req.body, response.bind(null, req, res), req));

module.exports = router;