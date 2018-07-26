import React, { Component } from 'react';
import ListItem from './ListItem.js';

class FileList extends Component {
	constructor(props){
		super(props);
		this.state = {
			fileList : []
		}
	}

	getFileList(){
		const params = {
	    corpus: 'user',
	    q: "mimeType='application/vnd.google-apps.spreadsheet'", 
		}

		window.gapi.client.drive.files.list(params)
		.then(response =>{
			console.log(response.result);
			this.setState({
				fileList : response.result.files
			})
		})
		.catch(err => {
			console.log(err);
		});


	}


	handleOnClick =  (item) => {
		console.log(item);
		console.log("clicked");
	}

	componentDidMount(){
		this.getFileList();
	}

	render(){
			const style = {
  				width: "18 rem",
  				border: "1px solid black"
			}
	

		const {fileList} = this.state;
		console.log(fileList);
		let lastTen = fileList.slice(-10);
		let listItems = lastTen.map((item, index) =>
			// use bind to know which item was clicked
			<ListItem key={index} onClick={this.handleOnClick.bind(this,item)} value={item.name} />



		);
		return (
			<div className="card" style={style}>
			  <div class="card-header"> FileList  </div>
				<ul className="list-group list-group-flush">{listItems}</ul>
			</div>
		);
	}

}


export default FileList;