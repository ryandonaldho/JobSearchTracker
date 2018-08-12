import React, { Component } from 'react';
import Spreadsheet from './Spreadsheet';
import {getFileList} from '../../helpers/googleAPI';
class FileList extends Component {
	constructor(props){
		super(props);
		this.state = {
			fileList : [],
			fileSelected: ""
		}
	}



	handleOnClick =  (item) => {
		//console.log(item);
		this.setState({
			fileSelected: item.id
		});
		console.log("clicked");
	}

	componentWillMount(){
		getFileList().then(files => {
			this.setState({
				fileList : files
			})
		});
	}

	render(){

		if (this.state.fileSelected){
			return(
			<Spreadsheet SpreadsheetId={this.state.fileSelected} />
			);
		}

		const style = {
			width: "18 rem",
			border: "1px solid black"
		}


		const {fileList} = this.state;
		console.log(fileList);
		if (fileList == undefined){
			return null;
		}
		let lastTen = fileList;
		let listItems = lastTen.map((item, index) =>
			// use bind to know which item was clicked
			<ListFileItem  key={index} onClick={this.handleOnClick.bind(this,item)} value={item.name} />



		);
		return (
			<div className="card mx-auto" style={style}>
			  <div class="card-header"> FileList  </div>
				<ul className="list-group list-group-flush">{listItems}</ul>
			</div>
		);
	}

}

export default FileList;

const ListFileItem = ({value, onClick}) =>{
	return (
		<div>
			<li className="list-group-item list-group-item-action" onClick={onClick}> {value} </li>
		</div>
	);

}
