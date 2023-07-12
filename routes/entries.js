const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');

// POST chronicles/:id/entries
//Route for Creating a Entry for a Chronicle
router.post('/chronicles/:id/entries', entriesCtrl.create);

module.exports = router;