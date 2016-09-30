var express = require('express');
var router = express.Router();

var datafactory = require('./chatData.js').datafactory

router.get('/getMyChatGroups',function(req,res){
	res.json(datafactory.chatStore);
});

router.post('/sendChat',function(req,res){
	var response = {
		status : true
	};
	datafactory.addChat(req.body);
	res.json(response);
});

router.post('/addChatGroup',function(req,res){
	var response = {
		status : true,
		group:{}
	};
	response.group = datafactory.addChatGroup(req.body);
	res.json(response);
});

module.exports = router