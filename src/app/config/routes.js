const express = require('express');

const router = express.Router();

/* Controllers */
const { isTest } = require('../controllers/404-controller');

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get('*', isTest);

module.exports = router;
