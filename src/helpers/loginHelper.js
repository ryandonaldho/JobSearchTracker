/* global gapi */

const initClient = () => {
   console.log("client init called");
  const API_KEY = 'AIzaSyDULiimi-dV31HILqUUv2s1n1j4CQ0x7CI';  // TODO: Update placeholder with desired API key.

  const CLIENT_ID = '322355182686-tt6klmnndb80q2tnhptefirene67dmqa.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

  // TODO: Authorize using one of the following scopes:
   const  list = ['https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/drive.appdata',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/plus.login']

  const SCOPE = list.join(' ');



  window.gapi.client.init({
    'apiKey': API_KEY,
    'clientId': CLIENT_ID,
    'scope': SCOPE,
    'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4','https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  }).then(() =>{
  	    window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
  });
}

export const handleClientLoad = () => {
	console.log("clientLoad called");
	const script = document.createElement("script");
	script.onload = () => {
		window.gapi.load('client:auth2', initClient);
	}
	script.src = "https://apis.google.com/js/client.js";
	document.body.appendChild(script);

 }


export const getSignInStatus = () =>{
	 return updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
}


export const updateSignInStatus = (isSignedIn) =>{

	if (isSignedIn) {
      	console.log("signedin");
      	return true;
	 	//	const auth2 = window.gapi.auth2.getAuthInstance();
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
  	return false;
  }
}


export const handleSignInClick = () => {
	window.gapi.auth2.getAuthInstance().signIn();
}

export const handleSignOutClick = () => {
	window.gapi.auth2.getAuthInstance().signOut();
}