var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');
var multer = require('multer');
var upload = multer({ dest: 'public/uploadfiles/'});
var type = upload.single('pitcure');

/* GET admin page. */
router.get('/adminwork', function(req, res, next) {
	res.render('adminwork', { title: '' });
});

router.post('/insertWork', type ,function(req, res) {

console.log(req.file);
console.log(req.body.description);

	mysql.insertMyWork(req.body.workName,req.body.description,req.file.path,function(data){
		res.render('adminwork', { title: '' });
	});
	
});

module.exports = router;
