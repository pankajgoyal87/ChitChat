import React from 'react'
import { connect } from 'react-redux'
import { addGroup,updateCurrentGroup } from '../actions/Actions'

import ChatListItem from './ChatListItem'
import AddChatGroupForm from './AddChatGroupForm'

class ChatList extends React.Component{
	constructor(props){
		super(props);

		this.state={
			currentGroupId : '',
			chatStore:{
				groupList:[{
					groupId:'',
					groupName:''
				}]
			}
		}

		this.handleChatGroupClick = this.handleChatGroupClick.bind(this);
		this.handleAddChatGroupClick = this.handleAddChatGroupClick.bind(this);

	};

	componentWillMount(){
		//subscribing to store change event
		this.setState({chatStore:this.props.chatStore});

		this.context.store.subscribe(() => {
			var state = this.context.store.getState();
			this.setState({chatStore:{
					groupList : state.chatStore.groupList
				}
			});
		});
	}

	//handle group clicked from chat list
	handleChatGroupClick(group){
		if(this.state.currentGroupId != group.groupId){
			this.props.dispatch(updateCurrentGroup(this.context.store.getState(),group));
		}

	}

	//handle on click of add chat group button
	handleAddChatGroupClick(){

	}

	render(){
		return <div className="chatList">
					<div className="col-xs-12 header"> 
						Chat List
						
						<button type="button" className="btn btn-primary pull-right" data-toggle="modal" 
							data-target="#addChatGroupModal">
							<i className="fa fa-plus addChatGroupBtn" ></i>
						</button>
						
					</div>
					<AddChatGroupForm></AddChatGroupForm>
					{this.state.chatStore.groupList.map((group,i) =>
						{{
							if(group.groupName.trim().length > 0){
								return <ChatListItem key={i} 
											itemName={group.groupName} 
											itemId={group.groupId}
											group={group} 
											chatGroupHandler = {this.handleChatGroupClick}/>
							}
						}}

					)}
				</div>
	}
}

ChatList.contextTypes = {store: React.PropTypes.object}
export default ChatList = connect()(ChatList)
