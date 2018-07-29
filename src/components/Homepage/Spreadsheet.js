import React, { Component } from 'react';
import ListItem from './ListItem';
import './Spreadsheet.css';
import  AddJobForm from './AddJobForm';

class Spreadsheet extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [[]],
			addButton: false
		}
	}

	getSpreadsheetData = () =>{
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

	addButtonClicked = () =>{
		console.log("add Button clicked");
		this.setState({
			addButton: !this.state.addButton
		});
		console.log(this.state.addButton);
	}

	componentDidMount(){
		this.getSpreadsheetData();

	}


	render(){
		const {list} = this.state;
		console.log(list.length);
		let lastFive = list.slice(-10);
		let listItems = lastFive.map((item, index) =>
			<ListItem key={index} value={item[0]} />
		);

		let addForm;
		if (this.state.addButton){
			addForm = <AddJobForm spreadsheetId={this.props.SpreadsheetId} length={this.state.list.length} addButtonClicked={this.addButtonClicked} />
		}

		return (
			<div className="container-fluid">
			{addForm}
			<button className ="btn btn-primary float-left" onClick={this.addButtonClicked} > Add New Applied Job </button>
			<div class="container">
			<ul> {listItems} </ul>
			</div>
			</div>
		);
	}

}


export default Spreadsheet;


