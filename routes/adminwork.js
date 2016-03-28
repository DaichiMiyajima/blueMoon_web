var express = require('express');
var router = express.Router();
var mysql = require(__dirname + '/../lib/mysql.js');
var multer = require('multer');
var upload = multer({ dest: 'public/uploadfiles/'});
var type = upload.single('pitcure');

/* GET admin page. */
router.get('/adminwork', function(req, res, next) {
	res.render('adminwork', { error: '' });
});

router.post('/insertWork', type ,function(req, res) {
	if((req.body.workName ==null || req.body.workName.length==0) ||
		(req.body.labor == null || req.body.workName.labor==0)  ||
		(req.body.bareMetal == null || req.body.bareMetal==0)  ||
		(req.body.jewel == null || req.body.jewel==0)  ||
		(req.body.description == null || req.body.description==0)  ||
		(req.file  == null)){
			res.render('adminwork', { error: 'すべての項目を埋めてください。' });
	}else{
			mysql.insertMyWork(req.body.workName,req.body.labor,req.body.bareMetal,req.body.jewel,req.body.description,req.file.path,function(data){
				res.render('adminwork', { error: '' });
		});
	}
	
});

module.exports = router;
