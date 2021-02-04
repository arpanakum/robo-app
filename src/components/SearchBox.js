import React from 'react';

const SearchBox = (props) => {
	return (
		<div>
			<input className='pa3 ba b--green bg-lightest-blue'
				onChange={props.handleChange} type='text' placeholder='Search Robots'/>
		</div>
		); 
}

export default SearchBox;