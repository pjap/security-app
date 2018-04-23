console.log('routes SHIFT');

const express = require('express');
const router = express.Router();
const ShiftController = require('../controllers/Shift');

router.get('/', ShiftController.findAllShift);

router.post('/', ShiftController.createShift);

router.put('/:id', ShiftController.updateShift);

router.delete('/:id', ShiftController.deleteShift);

module.exports = router;
