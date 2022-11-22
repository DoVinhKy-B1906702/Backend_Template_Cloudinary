const express = require('express');
const router = express.Router();

const AddressController = require('../controllers/address.controller');

router.post('/', AddressController.create);

module.exports = router;