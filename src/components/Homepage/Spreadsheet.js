import React, { Component } from 'react';
import ListItem from './ListItem.js';

class Spreadsheet extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [[]]
		}
	}

	getSpreadsheetData(){
		const params = {
		// The ID of the spreadsheet to retrieve data from.
	    spreadsheetId: this.props.SpreadsheetId,  // TODO: Update placeholder value.

	    // The A1 notation of the values to retrieve.
	    range: 'A1:D',  // TODO: Update placeholder value.

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
			//console.log(response.result);
			this.setState({
				list : response.result.values
			})
		})
		.catch(err => {
			console.log(err);
		});

	}

	componentDidMount(){
		this.getSpreadsheetData();

	}


	render(){
		const {list} = this.state;
		console.log(list);
		let lastFive = list.slice(-10);
		let listItems = lastFive.map((item, index) =>
			<ListItem key={index} value={item} />
		);
		return (
			<div>

			<ul> {listItems} </ul>
			</div>
		);
	}

}


export default Spreadsheet;