const express = require('express');
const auth = require('../middleware/auth');
const plantCtrl = require('../controllers/plant/plant');

const router = express.Router();

router.get('/', auth, plantCtrl.getAllPlant);
router.get('/:id', auth, plantCtrl.getOnePlant);

module.exports = router;
