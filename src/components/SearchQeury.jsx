import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import MovieCard from './MovieCard';
import { Button, Form, Row, Col } from 'react-bootstrap';
class SearchQeury extends Component {
	breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 700, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 4 },
		{ width: 1500, itemsToShow: 6 },
	];
	state = {
		// initial value?
		movies: [],
		query: '',
	};

	handleSubmit = async (e) => {
		// with async/await
		e.preventDefault();

		try {
			// the place for every operation that might fail outside of your control

			let response = await fetch(
				'http://www.omdbapi.com/?i=tt3896198&apikey=caa9d684&s=' +
					this.state.query,
			);
			let data = await response.json();
			if (data) {
				this.setState({
					...this.state,
					movies: data.Search,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		console.log(this.state.query);
		return (
			<div className='mb-4'>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						id='header-search'
						placeholder='Search movies'
						name='s'
						value={this.state.query}
						onChange={(e) => this.setState({ query: e.target.value })}
						style={{
							borderRadius: '10px',
							padding: '5px',
							backgroundColor: 'lightGray',
							marginLeft: '10rem',
						}}
					/>
					<button
						type='submit'
						style={{
							borderRadius: '10px',
							padding: '5px',
							backgroundColor: 'green',
						}}>
						Click here
					</button>
				</form>
				{/* 				
				<Form onSubmit={this.handleSubmit} className='d-flex'>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Serach movie'
							value={this.state.query}
							onChange={(e) => this.setState({ query: e.target.value })}
							style={{ width: '250px' }}
						/>
					</Form.Group>
					<Button type='submit'>Search Here</Button>
				</Form> */}

				{this.state.query && (
					<div className='mt-4'>
						<Carousel breakPoints={this.breakPoints}>
							{this.state.movies.map((movie) => {
								return <MovieCard img={movie.Poster} key={movie.imdbID} />;
							})}
						</Carousel>
					</div>
				)}
			</div>
		);
	}
}

export default SearchQeury;
