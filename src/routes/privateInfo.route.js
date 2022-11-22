const express = require('express');
const router = express.Router();

const InfoController = require('../controllers/privateInfo.controller');
const upload = require('../utils/multer');
router.post('/',  upload.single('img') ,InfoController.create);

module.exports = router;