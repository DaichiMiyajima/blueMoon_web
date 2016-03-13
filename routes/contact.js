var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET contact page. */
router.get('/contact', function(req, res, next) {
	res.render('contact', { footer: '' });
});

module.exports = router;
