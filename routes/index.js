var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Git Demo' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

/* GET privacy page. */
router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Privacy Policy' });
});

/* GET terms page. */
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'Terms of Service' });
});

module.exports = router;
