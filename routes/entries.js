const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /entries/:id/edit
router.get('/chronicles/:id/entries/:id/edit', entriesCtrl.edit);

// PUT /entries/:id
router.put('/entries/:id', ensureLoggedIn, entriesCtrl.update);

// POST chronicles/:id/entries
//Route for Creating a Entry for a Chronicle
router.post('/chronicles/:id/entries', ensureLoggedIn, entriesCtrl.create);

//DELETE /entires/:id
router.delete('/entries/:id', ensureLoggedIn, entriesCtrl.delete);

module.exports = router;