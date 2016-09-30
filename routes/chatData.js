var datafactory = {};

var chatStore = {
				groupList:[{
					groupId:1,
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
					groupId:2,
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
					groupId:3,
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
			};

datafactory.chatStore = chatStore;
datafactory.addChat = function(data){
	for(var count=0; count<chatStore.groupList.length; count++){
		if(chatStore.groupList[count].groupId == data.groupId){
			chatStore.groupList[count].chat.push(data.chat);
			break;
		}
	}
};

function getMaxGroupId(groupList){
	var id=0;
	for(var count=0; count<groupList.length; count++){
		if(groupList[count].groupId>id){
			id = groupList[count].groupId;
		}
	}
	return id+1;
}

datafactory.addChatGroup = function(data){
	
	var group = {
		groupId:getMaxGroupId(chatStore.groupList),
		groupName:data.groupName,
		isCurrentGroup:false,
		chat:[]
	};
	chatStore.groupList.push(group);
	return group;
};

module.exports.datafactory = datafactory