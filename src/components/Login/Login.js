import React, { Component } from 'react';
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

		return (
			<div>
			    <button id="signin-button" onClick={this.signedInPressed} >Sign in</button>
			</div>
		);
	}
}

export default Login;