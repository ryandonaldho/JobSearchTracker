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
			<div className="d-flex justify-content-center">
				<div className="jumbotron text-center">
					<h1 className="display-4">Job Search Tracker</h1>
					<p className="lead">This is a simple application that connect to your google drive account and keep tracks of your jobs in a spreadsheet</p>
					<hr className="my-4"/>
					<p>Uses Google Spreadsheet API</p>
					<p className="lead">
					<button id="signin-button" className="btn btn-primary" onClick={this.signedInPressed}> <i className="fa fa-google"> Google Sign in </i></button>
					</p>
				</div>
			</div>
		);
	}
}

export default Login;
