console.log('routes KODE DARURAT\n');

const express = require('express');
const router = express.Router();
const DaruratController = require('../controllers/KodeDarurat');

router.get('/', DaruratController.findAllDarurat);

router.post('/', DaruratController.createDarurat);

router.put('/:id', DaruratController.updateDarurat);

router.delete('/:id', DaruratController.deleteDarurat);

module.exports = router;
