console.log('routes ABSEN TRANSAKSI\n');

const express = require('express');
const router = express.Router();
const AbsenController = require('../controllers/AbsenTransaction');

router.get('/', AbsenController.findAllAbsen);

router.post('/', AbsenController.createAbsen);

router.put('/:id', AbsenController.updateAbsen);

router.delete('/:id', AbsenController.deleteAbsen);

router.patch('/pulang/:id', AbsenController.updatePulangAbsen);

module.exports = router;
