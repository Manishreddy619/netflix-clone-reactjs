{
	this.state.query && (
		<div className='mt-4'>
			<Carousel breakPoints={this.breakPoints}>
				{this.state.movies.map((movie) => {
					return <MovieCard img={movie.Poster} key={movie.imdbID} />;
				})}
			</Carousel>
		</div>
	);
}
