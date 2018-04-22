console.log('routes PATROLI TRANSAKSI\n');

const express = require('express');
const router = express.Router();
const PatroliController = require('../controllers/PatroliTransaction');

router.get('/', PatroliController.findAllPatroli);

router.post('/', PatroliController.createPatroli);

router.put('/:id', PatroliController.updatePatroli);

router.delete('/:id', PatroliController.deletePatroli);

module.exports = router;
