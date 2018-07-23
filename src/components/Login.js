import React, { Component } from 'react';

class Login extends Component {

	constructor(props){
		super(props);
	}

	initClient() {
      var API_KEY = 'AIzaSyDULiimi-dV31HILqUUv2s1n1j4CQ0x7CI';  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = '322355182686-tt6klmnndb80q2tnhptefirene67dmqa.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
       const  list = ['https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/spreadsheets.readonly',
        'https://www.googleapis.com/auth/plus.login']

      const SCOPE = list.join(' ');



      window.gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      })
    }

    handleClientLoad() {
      window.gapi.load('client:auth2', this.initClient);
    }

    // updateSignInStatus(isSignedIn) {
    // 	      if (isSignedIn) {
    //   	console.log("signedin");
    //     //makeApiCall();
    //   }
    // }	

    // updateSignInStatus = (isSignedIn) =>{
   	// 	if (isSignedIn) {
    //   	console.log("signedin");
    //     //makeApiCall();
    //   }
    // }

      	updateSignInStatus = (isSignedIn) =>{

   		if (isSignedIn) {
	      	console.log("signedin");
	      	this.props.setLoggedIn(true);
	  		// const auth2 = window.gapi.auth2.getAuthInstance();
			// var profile = auth2.currentUser.get().getBasicProfile();
			// console.log('ID: ' + profile.getId());
			// console.log('Full Name: ' + profile.getName());
			// console.log('Given Name: ' + profile.getGivenName());
			// console.log('Family Name: ' + profile.getFamilyName());
			// console.log('Image URL: ' + profile.getImageUrl());
			// console.log('Email: ' + profile.getEmail());

        //makeApiCall();
      }
      else{
      	console.log("signedOut");
      }
    }

	handleSignInClick = (e) => {
		e.preventDefault();
		window.gapi.auth2.getAuthInstance().signIn();
		window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
		this.updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
	}


	handleSignOutClick = (e) => {
		e.preventDefault();
		window.gapi.auth2.getAuthInstance().signOut();
		window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
		this.updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
		console.log(e);
	}

	// handleSignInClick(e){
	// 	e.preventDefault();
 //    	console.log('The link was clicked.');
	// }

	// handleSignOutClick(e){
	// 	e.preventDefault();
 //    	console.log('The link was clicked.');
	// }

	render(){
		this.handleClientLoad();
		return (
			<div>
			    <button id="signin-button" onClick={this.handleSignInClick} >Sign in</button>
    			<button id="signout-button" onClick={this.handleSignOutClick}>Sign out</button>
			</div>
		);
	}
}

export default Login;