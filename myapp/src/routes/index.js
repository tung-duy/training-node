var express = require('express');
var router = express.Router();
const { auth } = require('../controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  return res.json({ title: 'About'});
});

router.post('/login', auth.login);

module.exports = router;
