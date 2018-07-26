import React from 'react';




const ListItem = ({value, onClick}) =>{
	return (
		<div>
			<li className="list-group-item list-group-item-action" onClick={onClick}> {value} </li>
		</div>
	);
}

export default ListItem;