var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'AdPoster'
      });
});

router.get('/buy', function(req, res, next) {
    res.render('buy',
        {
            title: 'Buy'
        });
});

router.get('/sell', function(req, res, next) {
    res.render('sell',
        {
            title: 'Sell'
        });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about',
        {
            title: 'About'
        });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact',
        {
            title: 'Contact'
        });
});

module.exports = router;
