import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CC_RED from '../reducers/Reducers'

import MainWindow from '../components/MainWindow'
import Header from '../components/Header'

var defaultState = {
	groupList:[{
		groupId:'',
		groupName:''
	}],
	currentChat:[{
		owner:'',
		text:''
	}]
}

var store = createStore(CC_RED,defaultState);

class App extends React.Component{
	constructor(){
		super();
	};

	render(){
		return <Provider store={store}>
				<div> 
					<Header />
					<MainWindow />

				</div>
				</Provider>
	};
}

module.exports = App