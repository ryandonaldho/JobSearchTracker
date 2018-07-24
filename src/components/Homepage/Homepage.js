import React, { Component } from 'react';
import {handleSignOutClick,getSignInStatus,handleClientLoad} from '../../helpers/loginHelper';
import Spreadsheet from './Spreadsheet';
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
		return(
			<div>
				Home
				<button id="signout-button" onClick={this.signedOutPressed}>Sign out</button>
				<Spreadsheet SpreadsheetId={"1LOZWvG84gTeRE7rU0T0wEQFeFKXkvQgyzSIWTgPDBUg"} />
			</div>
		);
	}
}



export default Homepage;