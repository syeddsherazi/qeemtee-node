const express = require('express');
const router = express.Router();
const travellerController = require('../controllers/traveller.controller');

// A BETTER APPROACH ARCHITECTURE WISE WOULD BE TO DIVIDE ROUTES ENTITY BASED AND THEN USE JUST
// THE ENTITY'S MAIN ROUTE HERE e.g. '/traveller'
router.post('/', travellerController.create);
router.get('/', travellerController.list);
router.get('/:id', travellerController.details);
router.put('/:id', travellerController.update);
router.delete('/:id', travellerController.delete);

module.exports = router;