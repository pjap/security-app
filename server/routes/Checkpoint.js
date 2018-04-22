console.log('router CHECKPOINT\n');

const express = require('express');
const router = express.Router();
const CheckpointControllers = require('../controllers/Checkpoint');

router.get('/', CheckpointControllers.findAllCheckpoint);

router.post('/', CheckpointControllers.createCheckpoint);

router.put('/:id', CheckpointControllers.updateCheckpoint);

router.delete('/:id', CheckpointControllers.deleteCheckpoint);

module.exports = router;
