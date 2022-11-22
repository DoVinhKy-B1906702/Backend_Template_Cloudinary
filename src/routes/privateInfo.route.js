const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth')

const InfoController = require('../controllers/privateInfo.controller');
const upload = require('../utils/multer');

router.put('/:id',verifyToken ,InfoController.update);
router.patch('/image/:id',verifyToken , upload.single('img') ,InfoController.updateImage);
router.put('/cash/:id',verifyToken ,InfoController.updateCash);
module.exports = router;