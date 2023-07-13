const express = require('express');
const router = express.Router();
const chroniclesCtrl = require('../controllers/chronicles');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /chronicles/new
router.get('/new', ensureLoggedIn, chroniclesCtrl.new);

// POST /chronicles
router.post('/', ensureLoggedIn, chroniclesCtrl.create);

// // GET /index
router.get('/', chroniclesCtrl.index);

// GET /chronicles/:id
router.get('/:id', ensureLoggedIn, chroniclesCtrl.show);

// DELETE /chronicles/:id
router.delete('/:id', ensureLoggedIn, chroniclesCtrl.delete);

	
module.exports = router;