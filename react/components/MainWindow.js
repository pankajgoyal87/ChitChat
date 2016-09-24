import React from 'react'
import 'whatwg-fetch'
import { connect } from 'react-redux'
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'
import {addGroup,setGroupList} from '../actions/Actions'

class MainWindow extends React.Component{
	constructor(props){
		super(props);

		this.state={
			showChatWindow:false,
			chatStore:{
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
		};
		this.getMyChatGroups = this.getMyChatGroups.bind(this);
	};

	componentWillMount(){
		//function to get initial chat group list from server
		this.getMyChatGroups();
		//pushing default groups to store
		/*
		{this.state.chatStore.groupList.map((group,i) => 
			this.props.dispatch(addGroup(this.context.store.getState(),group))
		)};
		*/

		this.context.store.subscribe(() => {
			var state = this.context.store.getState();
			console.log('in main window subscribe');
			console.log(state.chatStore);
			for(var count=0; count<state.chatStore.groupList.length; count++){
				if(state.chatStore.groupList[count].isCurrentGroup){
					this.setState({showChatWindow:true});
					console.log('ill show this window');
					console.log(state.chatStore.groupList[count]);
					break;
				}
			}
			
		});
		
	}

	getMyChatGroups(){
		return fetch('http://localhost:3003/chat/getMyChatGroups',
				{
					method:'GET',
					headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
					  }
				}
			).then((response) => response.json())
		      .then((responseJson) => {
		      	console.log('im sending it to dispatch setGroupList');
		      	console.log(responseJson);
		      	this.props.dispatch(setGroupList(this.context.store.getState(),responseJson.groupList));
		      })
		      .catch((error) => {
		      	console.error(error);
		      });
	}


	render(){
		var showChatWindow = false;
		var groupWindow = {};
		{{ if (this.state.showChatWindow) {  
				{this.state.chatStore.groupList.map((group,i) =>  
					{{ if (group.isCurrentGroup) {
							showChatWindow = true;
							groupWindow = group;
						}
					}}
				)}
			}
		}}

		return <div className="col-xs-12 mainWindow">
			<div className="col-xs-12 col-md-3">
				<div className="col-xs-12 mainSection">
					<ChatList chatStore={this.state.chatStore} />
				</div>
			</div>
			
			<div className="col-xs-12 col-md-9 mainSection right">
				<div className="col-xs-12 mainSection">
					{showChatWindow &&
						<ChatWindow group={groupWindow}/>
					}

				</div>
			</div>
		</div>
	}
}

MainWindow.contextTypes = {store: React.PropTypes.object};

export default MainWindow = connect()(MainWindow)
