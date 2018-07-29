import React, { Component } from 'react';
import {handleSignOutClick,getSignInStatus,handleClientLoad} from '../../helpers/loginHelper';
import FileList from './FileList';
import {Redirect } from 'react-router-dom';
class Homepage extends Component {

	constructor(props){
		super(props);
	}

	signedOutPressed = (e) =>{
		e.preventDefault();
		handleSignOutClick();
		// init gapi again?
		handleClientLoad();
		if (getSignInStatus() === false){
			this.props.setLoggedIn(false);
		}
	}


	render(){

		if (!this.props.loggedIn){
			return (
			   <Redirect to="/" />
			);
		}

		return(
			<div className="col">
				Home
				<button id="signout-button" className="float-right" onClick={this.signedOutPressed}>Sign out</button>
				<FileList/>
			</div>
		);
	}
}



export default Homepage;