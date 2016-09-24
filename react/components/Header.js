import React from 'react'

class Header extends React.Component{
	constructor(props){
		super(props);
	};

	render(){
		return <nav className="navbar navbar-full navbar-light bg-faded">
				  <a className="navbar-brand" href="#">ChitChat</a>
				  <ul className="nav navbar-nav">
				    <li className="nav-item active">
				      <a className="nav-link" href="#">Home 
				      	<span className="sr-only">(current)</span>
				      </a>
				    </li>
				    <li className="nav-item">
				      <a className="nav-link" href="#">My Groups</a>
				    </li>
				  </ul>
				  <form className="form-inline pull-xs-right hide">
				    <input className="form-control" type="text" placeholder="Search"></input>
				    <button className="btn btn-outline-success" type="submit">Search</button>
				  </form>
				</nav>
	}
}

module.exports = Header