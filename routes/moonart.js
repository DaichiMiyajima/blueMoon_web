var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/moonart', function(req, res, next) {
	res.render('moonart', { title: '' });
});

module.exports = router;
