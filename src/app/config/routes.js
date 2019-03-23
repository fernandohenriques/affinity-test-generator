const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/users', (req, res) => {
  res.send('respond with a resource');
});

router.get('*', (req, res) => {
  res.status(404).render('404');
});

module.exports = router;
