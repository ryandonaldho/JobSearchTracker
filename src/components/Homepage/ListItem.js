import React from 'react';

const ListItem = ({value}) =>{
	return (
		<div>
			<li> {value[0]} </li>
		</div>
	);
}

export default ListItem;