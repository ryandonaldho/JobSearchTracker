import React from 'react';




const ListItem = ({value, onClick}) =>{
	return (
		<div>
			<li onClick={onClick}> {value} </li>
		</div>
	);
}

export default ListItem;