const express = require('express');
const router = express.Router();
const chroniclesCtrl = require('../controllers/chronicles');
	
// GET /chronicles/new
router.get('/new', chroniclesCtrl.new);

// POST /chronicles
router.post('/', chroniclesCtrl.create);

// // GET /index
router.get('/', chroniclesCtrl.index);

// GET /chronicles/:id
router.get('/:id', chroniclesCtrl.show);
	
module.exports = router;