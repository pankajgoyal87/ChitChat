var express = require('express');
var router = express.Router();

router.get('/getMyChatGroups',function(req,res){
	var chatStore = {
				groupList:[{
					groupId:'1',
					groupName:'My Family',
					isCurrentGroup:false,
					chat:[{
						owner:'Pankaj',
						text:'fist message of my family'
					},{
						owner:'Piyush',
						text:'second message of my family'
					}]
				},{
					groupId:'2',
					groupName:'Friends',
					isCurrentGroup:false,
					chat:[{
						owner:'Pankaj',
						text:'fist message of friends'
					},{
						owner:'Piyush',
						text:'second message of friends'
					}]
				},{
					groupId:'3',
					groupName:'Chicago Trip',
					isCurrentGroup:false,
					chat:[{
						owner:'Pankaj',
						text:'fist message of Chicago Trip'
					},{
						owner:'Piyush',
						text:'second message of Chicago Trip'
					}]
				}]
			}

	res.json(chatStore);
});

module.exports = router