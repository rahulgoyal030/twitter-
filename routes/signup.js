var express = require('express');

var router = express.Router();

router.post('/', function  (req,res) {

	console.log(req.url , " "  , req.body);
	
	//res.render('index');
	res.send("okk");
})

module.exports= router;