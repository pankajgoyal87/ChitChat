import React from 'react'
import { connect } from 'react-redux'
import { addSingleChatText } from '../actions/Actions'
import 'whatwg-fetch'

class ChatTextBox extends React.Component{
	constructor(props){
		super(props);
		this.state={
			textVal:''
		}

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSendButton = this.handleSendButton.bind(this);
		this.addChatToServer = this.addChatToServer.bind(this);
	};

	handleTextChange(e){
		this.setState({textVal:e.target.value});
		
	};

	handleSendButton(e){
		var chat={
			owner:'me',
			text:this.state.textVal
		};
		var groupId = '1';
		this.addChatToServer(groupId,chat);
		this.props.dispatch(addSingleChatText(this.context.store.getState(),chat));
		this.setState({textVal:''});
	}

	//function to add chat to server
	addChatToServer(groupId, chat){
		return fetch('http://localhost:3003/chat/sendChat',
				{
					method:'POST',
					headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
					  },
					body :JSON.stringify({
						groupId:groupId,
						chat:chat
					  }),
					timeout : 2000
				}
			).then((response) => response.json())
		      .then((responseJson) => {
		      	console.log(responseJson);
		      })
		      .catch((error) => {
		      	console.error(error);
		      });
	}

	render(){
		return <div className="col-xs-12 chatTextBox"> 
					<div className="form-inline">
					  <div className="form-group col-xs-12">
					    <div className="input-group chatTextInput">
					      <input id="chatTextBoxId" type="text" className="form-control input-box" 
					      	value={this.state.textVal}
							onChange = {this.handleTextChange}
							placeholder="Type A Message">
					      </input>
					      <div className="input-group-addon white-send-button">
					      	<span className="fa fa-send send-button" 
					      		onClick={this.handleSendButton}></span>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
	}
}

ChatTextBox.contextTypes = {store: React.PropTypes.object}

export default ChatTextBox = connect()(ChatTextBox)
