const CC_RED = (state,action) =>{
	switch(action.type){
		case 'UPDATE_CHAT':
			var newState = Object.assign({},state);
			newState = {
				currentChat:{
					data : action.chat
				}
			};
			return newState;
		
		case 'ADD_SINGLE_CHAT':
			var chatStore = {};
			var currentChat = [];
			if(undefined != state){ //existing data present
				chatStore = state.chatStore;
				if(undefined == chatStore){ // state present but chatstore not present
					chatStore = {};
					
				}
				if(undefined != chatStore.groupList){
					for(var count=0; count<chatStore.groupList.length; count++){
						if(chatStore.groupList[count].isCurrentGroup){
							if(undefined == chatStore.groupList[count].chat){
								chatStore.groupList[count].chat = [];
							}else{
								chatStore.groupList[count].chat.push(action.chat.data);
							}
							break;
						}
					}
				}
				
				/*
				if(undefined == chatStore.currentChat){ //state and chatstore present but current chat not present
					chatStore.currentChat = [];
				}
				chatStore.currentChat.push({
						owner:'',
						text:action.chat.data
				});
				*/
			}else{ //first time data addition, but was unable to find chatstore in state
				/*
				chatStore.currentChat = [{
					owner:'',
					text:action.chat.data
				}];
				*/
			}
			var newState = Object.assign({},state);
			newState.chatStore = chatStore;
			
			return newState;

		case 'ADD_GROUP':
			var chatStore={};
			if(undefined != state){ //existing data exists
				chatStore= state.chatStore;
				if(undefined == chatStore){ // state present but chatstore not present
					chatStore={};
				}
				if(undefined == chatStore.groupList){ // chatstore present by groupList is not present in it
					chatStore.groupList = [];
				}
				chatStore.groupList.push(action.group.data);
			}else{ //first time data addition
				chatStore.groupList = [action.group.data];
			}
			var newState = Object.assign({},state);
			newState.chatStore = chatStore;

			return newState;

		case 'SET_GROUP_LIST':
			console.log('reducer - SET_GROUP_LIST');
			console.log(action.group.data);
			var chatStore={};
			if(undefined != state){ //existing data exists
				chatStore= state.chatStore;
				if(undefined == chatStore){ // state present but chatstore not present
					chatStore={};
				}
				if(undefined == chatStore.groupList){ // chatstore present by groupList is not present in it
					chatStore.groupList = [];
				}
				chatStore.groupList = action.group.data;
			}else{ //first time data addition
				chatStore.groupList = action.group.data;
			}
			var newState = Object.assign({},state);
			newState.chatStore = chatStore;
			console.log('SET_GROUP_LIST');
			console.log(newState);
			return newState;
			
		case 'UPDATE_CURRENT_GROUP':
			var chatStore = {};

			if(undefined != state){
				chatStore = state.chatStore;
				if(undefined == chatStore){
					chatStore = {}
				}
				if(undefined != chatStore.groupList){
					for(var count=0; count<chatStore.groupList.length; count++){
						if(action.group.data.groupId == chatStore.groupList[count].groupId){
							chatStore.groupList[count].isCurrentGroup = true;
						}else if(action.group.data.groupId != chatStore.groupList[count].groupId && 
							chatStore.groupList[count].isCurrentGroup){
							chatStore.groupList[count].isCurrentGroup = false;
						}
					}
				}else{
					chatStore.groupList = [action.group.data]
				}
				/*
				if(undefined == chatStore.currentChatGroup){
					chatStore.currentChatGroup={
						groupId: action.group.data.groupId,
						groupName: action.group.data.groupName
					}
				}
				*/
			}else{
				chatStore.groupList = [action.group.data]
			}

			var newState = Object.assign({},state);
			state.chatStore = chatStore
			return newState;

		default:
			return newState;

	}
}

export default CC_RED
