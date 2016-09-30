import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import { connect } from 'react-redux'
import { addGroup } from '../actions/Actions'

class AddChatGroupForm extends React.Component{
	constructor(props){
		super(props);

		this.state={
			formData:{
				groupName:''
			}
		}

		this.addChatGroup = this.addChatGroup.bind(this)
		this.handleGroupNameInputBox = this.handleGroupNameInputBox.bind(this)
		this.addChatGroupToServer = this.addChatGroupToServer.bind(this)
	}

	//function to handle add button to add chat group
	addChatGroup(){
		//find max group Id
		/*
		var currentChatStore = this.context.store.getState().chatStore;
		var groupId = currentChatStore.groupList.length+1;
		var group={
			groupId:groupId,
			groupName: this.state.formData.groupName,
			isCurrentGroup:false,
			chat:[]
		}
		*/
		//this.props.dispatch(addGroup(this.context.store.getState(),group))
		this.addChatGroupToServer()
		
		
	}

	addChatGroupToServer(){
		return fetch('http://localhost:3003/chat/addChatGroup',
				{
					method:'POST',
					headers: {
					    'Accept': 'application/json',
					    'Content-Type': 'application/json'
					  },
					body :JSON.stringify({
						groupName:this.state.formData.groupName
					  }),
					timeout : 2000
				}
			).then((response) => response.json())
		      .then((responseJson) => {
		      	console.log(responseJson.group);
		      	this.props.dispatch(addGroup(this.context.store.getState(),responseJson.group))
		      	//clearing this once group is added
				this.setState({formData:{
								groupName:''}
							})
				//hide modal
				$(ReactDOM.findDOMNode(this)).modal('hide')
		      	
		      })
		      .catch((error) => {
		      	console.error(error);
		      });
	}

	handleGroupNameInputBox(e){
		this.setState({formData:{
						groupName:e.target.value}
					})
	}

	render(){
		return <div className="modal fade" id="addChatGroupModal" 
					tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" 
					aria-hidden="true">
				  <div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				        <h4 className="modal-title">{this.state.formData.groupName}</h4>
				      </div>
				      <div className="modal-body">
				      		<form>
				      			<div className="form-group">
				      				<label>Group Name</label>
				      				<input value={this.state.formData.groupName} 
				      						onChange={this.handleGroupNameInputBox}
				      						className="form-control" id="groupName" 
				      						placeholder="Group Name like Friends, Family, My Batch 2016,...">
				      				</input>
				      			</div>
				      		</form>  

				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary hide" data-dismiss="modal">Close</button>
				        <button type="button" 
				        	className="btn btn-primary"
				        	onClick={this.addChatGroup}>Add</button>
				      </div>
				    </div>
				  </div>
				</div>
	}
}

AddChatGroupForm.contextTypes = {store: React.PropTypes.object}
export default AddChatGroupForm = connect()(AddChatGroupForm)