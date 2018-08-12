import React, { Component } from 'react';
import {handleSignOutClick,getSignInStatus,handleClientLoad} from '../../helpers/loginHelper';
import {getFileList,createSpreadsheet} from '../../helpers/googleAPI';
import FileList from './FileList';
import Spreadsheet from './Spreadsheet';
import {Redirect } from 'react-router-dom';
class Homepage extends Component {

	constructor(props){
		super(props);
		this.state = {
			fileList: [],
			spreadsheetId: ""
		}
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

	componentDidMount() {
		/* check if prior user or new user
		if new user create spreadsheet called JobTrackerSheet
		else open up JobTrackerSheet
		*/

		getFileList().then(files => {
			this.setState({
				fileList : files
			})
		}).then(() =>{
			let fileExist = this.state.fileList.filter(file => file.name === "JobTrackerSheet")
			// set state to spreadsheetId
			if (fileExist.length > 0){
				console.log(fileExist[0].id);
				this.setState({
					spreadsheetId: fileExist[0].id
				});
			}

			// create new spreadsheet
			else{
				console.log("new user");
				this.setState({
					newUser: false
				});
				createSpreadsheet().then(id =>{
					//console.log("id" + id);
					this.setState({
						spreadsheetId : id
					});
				})
			}
		});

		console.log(this.state.fileList);
		//createSpreadsheet();



	}


	render(){
		console.log(this.state.fileList);
		// when signout is pressed
		if (!this.props.loggedIn){
			return (
			   <Redirect to="/" />
			);
		}

		return(
			<div className="container">
			<div className="row justify-content-center">
				Home
				<button id="signout-button" className="float-right" onClick={this.signedOutPressed}>Sign out</button>
			</div>
				<div className="row row-lg-auto justify-content-center">
				<Spreadsheet SpreadsheetId={this.state.spreadsheetId} />
			 </div>
			</div>
		);
	}
}



export default Homepage;
