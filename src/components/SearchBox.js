import React from 'react';

const SearchBox = (props) => {
	return (
		<div className='col'>
			<input
				className='form-control-nav'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Поиск'
			></input>
		</div>
	);
};

export default SearchBox;