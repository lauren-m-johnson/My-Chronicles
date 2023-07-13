var express = require('express');
var router = express.Router();
const passport = require('passport');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const ROOT_URL = 'https://type.fit/api/quotes';

/* GET landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Chronicles' });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/home',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

// API for random inspirational quote on home page
router.get('/home', ensureLoggedIn, function(req, res, next) {
  const user = req.user;
  
  fetch(`${ROOT_URL}`)
    .then(res => res.json())
    .then(data => {
      const quote = getRandomQuote(data);
      res.render('home', { user, quote });
    })
    .catch(err => {
      console.error(err);
      res.render('home', { user, quote: '' });
    });
});

// function to get a random quote from the API response
function getRandomQuote(data) {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex].text;
}

module.exports = router;