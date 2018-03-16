var express = require('express');
var router = express.Router();

//Test Controller
router.get('/', function(req, res) {
	console.log('testing controller');
});

module.exports = router;