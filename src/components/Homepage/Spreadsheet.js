import React, { Component } from 'react';
import ListItem from './ListItem';
import './Spreadsheet.css';
import  AddJobForm from './AddJobForm';





class Spreadsheet extends Component {

	constructor(props){
		super(props);
		this.state = {
			list: [[]],
			listObject: [[]],
			addButton: false
		}
	}

	 getSpreadsheetData = () => {
		console.log(this.props.SpreadsheetId);
		const params = {
		// The ID of the spreadsheet to retrieve data from.
	    spreadsheetId: this.props.SpreadsheetId,

	    // The A1 notation of the values to retrieve.
	    range: 'A1:D',  //

	    // How values should be represented in the output.
	    // The default render option is ValueRenderOption.FORMATTED_VALUE.

	    valueRenderOption: 'FORMATTED_VALUE',

	    // How dates, times, and durations should be represented in the output.
	    // This is ignored if value_render_option is
	    // FORMATTED_VALUE.
	    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
	    dateTimeRenderOption: 'SERIAL_NUMBER',
		}

		return window.gapi.client.sheets.spreadsheets.values.get(params)
		.then(response => response.result.values)
		.catch(err => {
			console.log(err);
		});

	}

	clearSpreadsheetData = (index) =>{
		     var params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: this.props.SpreadsheetId,  // TODO: Update placeholder value.

        // The A1 notation of the values to clear.
        range: `A${index}:B${index}`,  // TODO: Update placeholder value.
      };

      var clearValuesRequestBody = {
        // TODO: Add desired properties to the request body.
      };

      var request = window.gapi.client.sheets.spreadsheets.values.clear(params, clearValuesRequestBody);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
	}

	updateData = () =>{
		this.getSpreadsheetData().then(data => {
			// setup data for displaying
			let tempList = [];
			if (data !== undefined){
				data.map((item,index) =>{
					tempList.push({
						index : index + 1,
						companyName : item[0],
						date : item[1]

					})
				})
			}
				this.setState({
					listObject : tempList
				});
			//console.log(data);
		});

	}

	addButtonClicked = () =>{
		console.log("add Button clicked");
		this.setState({
			addButton: !this.state.addButton
		});
	}

	handleNewJobs = () =>{
		console.log("new job called")
		this.updateData();
	}


	handleOnClickDelete = (item) => {
		console.log(item);
		this.clearSpreadsheetData(item.index);
		this.updateData();
		console.log(this.state.listObject);
	}

	componentDidMount(){
		//console.log(this.props.spreadsheetId);
		this.updateData();
	}



	render(){

		if (this.state.listObject === undefined){
			// can put loading screen here
			return null;
		}

		let lastN = this.state.listObject.slice(-10);

		let listItems = lastN.map((item) =>{
			return <ListItem key={item.index} onClickDelete={this.handleOnClickDelete.bind(this,item)} value={item.companyName} date={item.date} />
		}
		);


		let addForm;
		console.log(this.state.listObject.length);
		if (this.state.addButton){
			addForm = <AddJobForm spreadsheetId={this.props.SpreadsheetId} handleNewJobs={this.handleNewJobs} length={this.state.listObject.length} />
		}

		return (
				<div className="container">
					<div className="row justify-content-center p-2"> <button className ="btn btn-primary float-right" onClick={this.addButtonClicked} > Add New Applied Job </button> </div>
					<div className="row justify-content-center p-2">{addForm}</div>
					<div className="row justify-content-center p-2"> <ul className="list-group scroll"> {listItems} </ul> </div>
				</div>
		);
	}

}


export default Spreadsheet;
