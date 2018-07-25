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
		const {fileList} = this.state;
		console.log(fileList);
		let lastTen = fileList.slice(-10);
		let listItems = lastTen.map((item, index) =>
			// use bind to know which item was clicked
			<ListItem key={index} onClick={this.handleOnClick.bind(this,item)} value={item.name} />
		);
		return (
			<div>
				FileList
				{listItems}
			</div>
		);
	}

}


export default FileList;