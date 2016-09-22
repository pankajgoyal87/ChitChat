import React from 'react'
import ChatTextBox from './ChatTextBox'
import Chat from './Chat'
import { connect } from 'react-redux'

class ChatWindow extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillMount(){
		
	}

	render(){
		return <div className="col-xs-12">
				<div className="card card-block chatWindow">
				  <h4 className="card-title">{this.props.group.groupName}</h4>
				  <div className="card-text">
				  	<Chat group={this.props.group} />
				  </div>
				  <ChatTextBox />
				</div>
			</div>
	}
}

ChatWindow.contextTypes = {store: React.PropTypes.object};
export default ChatWindow = connect()(ChatWindow)
