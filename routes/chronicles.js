const express = require('express');
const router = express.Router();
const chroniclesCtrl = require('../controllers/chronicles');
	
// GET /chronicles/new
router.get('/new', chroniclesCtrl.new);

// POST /chronicles
router.post('/', chroniclesCtrl.create);

// GET /chronicles/:id
router.get('/:id', chroniclesCtrl.show);

// WHY ISNT THIS WORKING????
// // GET /chronicles
// router.get('/', chroniclesCtrl.index);
	
module.exports = router;