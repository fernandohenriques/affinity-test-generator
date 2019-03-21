const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res) {
  res.send('respond with a resource');
});

router.get('*', function(req, res) {
  res.status(404).render('404');
});

module.exports = router;
