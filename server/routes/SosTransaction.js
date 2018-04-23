console.log('routes SOS TRANSAKSI\n');

const express = require('express');
const router = express.Router();
const SosController = require('../controllers/SosTransaction');

router.get('/', SosController.findAllSos);

router.post('/', SosController.createSos);

router.put('/:id', SosController.updateSos);

router.delete('/:id', SosController.deleteSos);

module.exports = router;
