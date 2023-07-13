const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//DELETE /entires/:id
router.delete('/entries/:id', ensureLoggedIn, entriesCtrl.delete);

// POST chronicles/:id/entries
//Route for Creating a Entry for a Chronicle
router.post('/chronicles/:id/entries', ensureLoggedIn, entriesCtrl.create);

module.exports = router;