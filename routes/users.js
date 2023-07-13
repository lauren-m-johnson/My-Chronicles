var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET User's name and Avatar and passes it to the homepage
// router.get('/home', function(req, res) {
//   const userName = req.user.name;
//   const userAvatar = req.user.avatar;

//   res.render('home', { userName, userAvatar });
// });

module.exports = router;
