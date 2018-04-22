console.log('routes GI\n');

const express = require('express');
const router = express.Router();
const GiController = require('../controllers/GI');

router.get('/', GiController.findAllGi);

router.post('/', GiController.createGi);

router.put('/:id', GiController.updateGi);

router.delete('/:id', GiController.deleteGi);

module.exports = router;
