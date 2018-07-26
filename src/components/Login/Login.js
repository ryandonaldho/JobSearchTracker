import React, { Component } from 'react';
import './Login.css';
import {Redirect } from 'react-router-dom';
import {handleClientLoad,handleSignInClick,getSignInStatus} from '../../helpers/loginHelper';

class Login extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		handleClientLoad();
	}

	signedInPressed = (e) =>{
		e.preventDefault();
		handleSignInClick();
		if (getSignInStatus() === true){
			this.props.setLoggedIn(true);
		}
	}

	render(){
		if (this.props.loggedIn){
			return (
			   <Redirect to="/home" />
			);
		}

		return (
			<div class="jumbotron text-center">
			<h1 class="display-4">Job Search Tracker</h1>
			<p class="lead">This is a simple application that connect to your google drive account and keep tracks of your jobs in a spreadsheet</p>
			<hr class="my-4"/>
			<p>Uses Google spreadsheet api</p>
			<p class="lead">
			<button id="signin-button" className="btn btn-primary" onClick={this.signedInPressed}> <i className="fa fa-google"> Google Sign in </i></button>
			</p>
			</div>
		);
	}
}

export default Login;