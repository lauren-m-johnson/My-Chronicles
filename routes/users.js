var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET User's name and Avatar and passes it to the homepage
router.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

router.get('/', (req, res) => {
  res.render('/header', { user: req.user });
});

module.exports = router;
