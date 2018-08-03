import React from 'react';




const ListItem = ({value, date ,onClickDelete}) =>{

	// don't redner empty value in spreadsheet

	if (value){

	return (
		<div>
			<li className="list-group-item list-group-item-action"> {value} {date} <button onClick={onClickDelete} class="btn btn-light float-right"> <i class="fa fa-trash" aria-hidden="true"></i> </button> </li>
		</div>
	);

	}

	return (null);


}

export default ListItem;