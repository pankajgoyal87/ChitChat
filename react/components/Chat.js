import React from 'react'
import { connect } from 'react-redux'

class Chat extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			group:{
				groupId:'',
				groupName:'',
				isCurrentGroup:false,
				chat:[]
			},
			chatStore:{
				currentChat:[{
					owner:'',
					text:''
				}]
			}	
		};

	};

	componentWillMount(){
		this.setState({group : this.props.group});
		this.context.store.subscribe(() => {
			var state = this.context.store.getState();
			this.setState({
				chatStore:{
					currentChat : state.chatStore.currentChat
				}
			});
		});

	};

	render(){
		/* Just to explain how processing and simple variable as required can be created */
		/*
		var chatList = [];
		{this.state.chatStore.currentChat.map((chat,i) =>
			{{
				if(chat.text.trim().length > 0){
					chatList.push(chat.text);
				}
			}}
		)}; /*
		/*End of explaining about the processing*/
		
		return <div className="col-xs-12">
					<div className="col-xs-9 pull-left chat">
						This is chat text content
					</div>

					<div className="col-xs-9 pull-right chat right">
						This is another chat text content
					</div>
					{this.props.group.chat.map((chat,i) =>
						{
							{{ if (chat.text.trim().length > 0 ) {
								return	<div key={i} className="col-xs-9 pull-right chat right">
									{chat.owner} : {chat.text}
								</div>
								}	
							}}
							
						}
					)}

				</div>
	}
}

Chat.contextTypes = {store:React.PropTypes.object}
export default Chat = connect()(Chat)
