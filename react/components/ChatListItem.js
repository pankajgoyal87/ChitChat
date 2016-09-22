import React from 'react'

class ChatListItem extends React.Component{
	constructor(){
		super();
		
	};


	render(){
		return <div className="col-xs-12 chatListItem">
					<div className="chatListItemName" 
						onClick={this.props.chatGroupHandler.bind(this,this.props.group)}>{this.props.itemName}</div>
				</div>
	}
}

module.exports = ChatListItem