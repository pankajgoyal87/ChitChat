export const updateChat = (chat) =>{
	return {
		type: 'UPDATE_CHAT',
		chat:{
			data: chat
		}
		
	}
}

export const addSingleChatText = (state,chat) =>{
	return {
		type: 'ADD_SINGLE_CHAT',
		chat:{
			data: chat
		},
		state
	}
}

export const addGroup = (state,group) =>{
	return {
		type:'ADD_GROUP',
		group:{
			data:group
		},
		state
	}
}

export const setGroupList = (state,response) =>{
	return {
		type:'SET_GROUP_LIST',
		group:{
			data:response
		},
		state
	}
}

export const updateCurrentGroup = (state,group) =>{
	return {
		type: 'UPDATE_CURRENT_GROUP',
		group:{
			data:group
		},
		state
	}
}