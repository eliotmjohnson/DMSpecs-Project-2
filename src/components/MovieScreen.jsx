import MovieCard from "./MovieCard";

const MovieScreen = ({
	list,
	page,
	setPage,
	movieList,
	addMovie,
	removeMovie,
}) => {
	const movieDisplay = movieList.map((movie, index) => {
		return (
			<MovieCard
				key={movie.id}
				list={list}
				movie={movie}
				addMovie={addMovie}
				removeMovie={removeMovie}
			/>
		);
	});

	const decrement = () => {
		setPage((prev) => {
			return prev - 1;
		});
	};

	const increment = () => {
		setPage((prev) => {
			return prev + 1;
		});
	};

	return (
		<div className="page">
			<h1>Eliot's Movie Theatre</h1>
			<h3>Add a movie to your watchlist!</h3>
			<div className="btn-container">
				<button onClick={page !== 1 ? decrement : null}>Previous</button>
				<button onClick={increment}>Next</button>
			</div>
			<div className="movie-container">{movieDisplay}</div>
		</div>
	);
};

export default MovieScreen;
