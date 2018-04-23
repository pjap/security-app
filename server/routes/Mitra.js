console.log('routes MITRA\n');

const express = require('express');
const router = express.Router();
const MitraController = require('../controllers/Mitra');

router.get('/', MitraController.findAllMitra);

router.post('/', MitraController.createMitra);

router.put('/:id', MitraController.updateMitra);

router.delete('/:id', MitraController.deleteMitra);

module.exports = router;
