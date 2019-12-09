var express = require('express');
var router = express.Router();
const ctrlStock = require('../controllers/stock');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Stock' });
});

module.exports = router;
