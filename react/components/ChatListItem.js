import React from 'react'

class ChatListItem extends React.Component{
	constructor(){
		super();
		
	};


	render(){
		var cls = "col-xs-12 chatListItem";
		{{
			if (this.props.group.isCurrentGroup) {
				cls=cls + " active";
			}
		}}
		return <div className={cls}>
					<div className="chatListItemName" 
						onClick={this.props.chatGroupHandler.bind(this,this.props.group)}>{this.props.itemName}</div>
				</div>
	}
}

module.exports = ChatListItem