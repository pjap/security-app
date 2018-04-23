console.log('routes KARYAWAN\n');

const express = require('express');
const router = express.Router()
const KaryawanController = require('../controllers/Karyawan')

router.get('/', KaryawanController.findAllKaryawan)

router.post('/', KaryawanController.createKaryawan)

router.put('/:id', KaryawanController.updateKaryawan)

router.delete('/:id', KaryawanController.deleteKaryawan)

router.get('/:search', KaryawanController.searchKaryawan)

module.exports = router;
