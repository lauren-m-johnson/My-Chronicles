var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Chronicles' });
});

// GET homepage
router.get('/home', function(req, res) {
  res.render('home');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

//UPDATE WHEN MAIN ROUTE ESTABLISHED
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    //update to new route 
    res.redirect('/');
  });
});

module.exports = router;
