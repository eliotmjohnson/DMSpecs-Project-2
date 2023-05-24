import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie }) => {
	const movieDisplay = list.map((movie) => {
		return (
			<MovieCard
				key={movie.id}
				movie={movie}
				removeMovie={removeMovie}
				list={list}
			></MovieCard>
		);
	});
	return (
		<div className="watchlist">
			<h1>My Watchlist</h1>
			<div className="movie-container">{movieDisplay}</div>
		</div>
	);
};

export default Watchlist;
