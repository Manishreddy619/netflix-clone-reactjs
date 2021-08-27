import React from 'react';
import './Card.css';

const MovieCard = (props) => {
	return (
		<div className='card'>
			<img src={props.img} alt='moviecard' />
		</div>
	);
};

export default MovieCard;
