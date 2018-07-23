import React, { Component } from 'react';

class Homepage extends Component {

	getSpreadsheet(){
		fetch('https://sheets.googleapis.com/v4/spreadsheets/1LOZWvG84gTeRE7rU0T0wEQFeFKXkvQgyzSIWTgPDBUg')
		.then(response =>{
			console.log(response);
		})
		.error(err => console.log(err));
	}

	render(){
		//this.getSpreadsheet();
		return(
			<div>
				Home
			</div>
		);
	}
}



export default Homepage;