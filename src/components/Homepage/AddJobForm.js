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
        range: `A${this.props.length+1}`,  // TODO: Update placeholder value.

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
			<div className="input-group mb-3">
			  <input onChange={this.onNameChange} type="text" className="form-control" id="inlineFormInputName2" value={this.state.companyName} placeholder="Company Name" required/>
				  <div className="input-group-append">
			  <button type="button" onClick={this.onClickSubmit} className="btn btn-primary mb-2">Submit</button>
				 </div>
			</div>
	);

	}

}

export default AddJobForm;
