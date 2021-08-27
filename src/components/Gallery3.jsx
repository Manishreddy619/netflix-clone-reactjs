import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import MovieCard from './MovieCard';
class Gallery3 extends Component {
	breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 700, itemsToShow: 2 },
		{ width: 1200, itemsToShow: 4 },
		{ width: 1500, itemsToShow: 6 },
	];
	state = {
		// initial value?
		movies: [],
	};
	fetch = async () => {
		console.log("I'm componentDidMount");
		// here things happen AFTER the initial render
		// this is the PERFECT PLACE for a get request
		// because the user is already watching your "static" part of the jsx
		// now we're going to perform here the fetch (a get request)
		// it's somewhat like window.onload()

		// componentDidMount will always happen JUST ONCE!!!
		try {
			let response = await fetch(
				'http://www.omdbapi.com/?i=tt3896198&apikey=caa9d684&s=harry',
			);
			// console.log(response)

			if (response.ok) {
				let moviesResult = await response.json();
				console.log(moviesResult);
				this.setState({
					movies: moviesResult.Search,
					// this is equal to reservations: reservations
				});
			} else {
				console.log('something went wrong with the server');
				// this.setState({
				// 	isLoading: false,
				// 	isError: true,
				// });
			}
		} catch (error) {
			console.log(error);
			// this.setState({
			// 	isLoading: false,
			// 	isError: true,
			// });
		}
	};
	componentDidMount = async () => {
		this.fetch();
	};

	render() {
		return (
			<div>
				<h3 className='ml-4' style={{ color: 'white' }}>
					Suggested
				</h3>
				;
				<Carousel breakPoints={this.breakPoints}>
					{this.state.movies.map((movie) => {
						return <MovieCard img={movie.Poster} key={movie.imdbID} />;
					})}
				</Carousel>
			</div>
		);
	}
}

export default Gallery3;
