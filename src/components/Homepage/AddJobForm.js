import React, { Component } from 'react';

class AddJobForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			companyName : ''
		}
	}

	addData(){

	 let params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: this.props.spreadsheetId,  // TODO: Update placeholder value.

        // The A1 notation of a range to search for a logical table of data.
        // Values will be appended after the last row of the table.
         range: `A${this.props.length}`,  // TODO: Update placeholder value.

        // How the input data should be interpreted.
        valueInputOption: 'RAW',  // TODO: Update placeholder value.

        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
      };

      // let today = new Date();
      // let date = today.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
      // console.log(data);

      let today = new Date();
   	  let date = (today.getMonth()+1) + '-' + today.getDate() + '-' + today.getFullYear();
      var valueRangeBody = {
        "values" : [[this.state.companyName, today.toISOString()]]
      };


      var request = window.gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
	}


	onClickSubmit = () =>{
		console.log("submit clicked");
		// prevent empty field
		if (this.state.companyName.length)
			this.addData();
		// clear field after submit
		this.setState({
			companyName : ''
		})
		this.props.handleNewJobs();
	}

	onNameChange = (event) =>{
		this.setState({
			companyName : event.target.value
		});
	}

	render(){
		return (
			<form class="form-inline">
			  <label class="sr-only" htmlFor="inlineFormInputName2">Name</label>
			  <input onChange={this.onNameChange} type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" value={this.state.companyName} placeholder="Company Name" required/>

			  <button type="button" onClick={this.onClickSubmit} class="btn btn-primary mb-2">Submit</button>
			</form>
	);

	}

}

export default AddJobForm;

