const express = require('express');
const router = express.Router();
const chroniclesCtrl = require('../controllers/chronicles');
	
// GET /movies/new
router.get('/new', chroniclesCtrl.new);
	
module.exports = router;