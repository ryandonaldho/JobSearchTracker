import React, { Component } from 'react';
import {handleSignOutClick,getSignInStatus,handleClientLoad} from '../../helpers/loginHelper';
import Spreadsheet from './Spreadsheet';
class Homepage extends Component {

	constructor(props){
		super(props);
	}

	getSpreadsheet(){
		const params = {
		// The ID of the spreadsheet to retrieve data from.
        spreadsheetId: '1LOZWvG84gTeRE7rU0T0wEQFeFKXkvQgyzSIWTgPDBUg',  // TODO: Update placeholder value.

        // The A1 notation of the values to retrieve.
        range: 'A1:B100',  // TODO: Update placeholder value.

        // How values should be represented in the output.
        // The default render option is ValueRenderOption.FORMATTED_VALUE.
        valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

        // How dates, times, and durations should be represented in the output.
        // This is ignored if value_render_option is
        // FORMATTED_VALUE.
        // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
        dateTimeRenderOption: 'SERIAL_NUMBER',  // TODO: Update placeholder value.
		}

		window.gapi.client.sheets.spreadsheets.values.get(params)
		.then(response =>{
			console.log(response.result)
		})
		.catch(err => {
			console.log(err);
		});

	}

	signedOutPressed = (e) =>{
		e.preventDefault();
		handleSignOutClick();
		handleClientLoad();
		if (getSignInStatus() === false){
			this.props.setLoggedIn(false);
		}
	}


	render(){
		this.getSpreadsheet();
		return(
			<div>
				Home
				<Spreadsheet/>
			<button id="signout-button" onClick={this.signedOutPressed}>Sign out</button>
			</div>
		);
	}
}



export default Homepage;