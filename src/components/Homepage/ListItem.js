import React from 'react';
import './ListItem.css';



const ListItem = ({value, date ,onClickDelete}) =>{

	// don't redner empty value in spreadsheet

	if (value){

	return (
		<div>
			<li className="list-group-item list-group-item-action align-items-center listItem "> {value} <button onClick={onClickDelete} class="btn btn-light float-right deleteButton"> <i class="fa fa-trash" aria-hidden="true"></i> </button>  <br/> {date}  </li>
		</div>
	);

	}

	return (null);


}

export default ListItem;
