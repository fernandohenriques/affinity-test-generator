const express = require('express');

const router = express.Router();

/* Controllers */
const { isTest } = require('../controllers/404-controller');

router.use((req, res, next) => {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('/users', (req, res) => {
  res.send('teste de user');
});

router.get('*', isTest);

module.exports = router;
