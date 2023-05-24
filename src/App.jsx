import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
	const [movieList, setMovieList] = useState([]);
	const [list, setList] = useState([]);
	const [page, setPage] = useState(1);

	const addMovie = (movie) => {
		setList((prev) => {
			return [...prev, movie];
		});
	};

	const removeMovie = (movie) => {
		const newState = list.filter((elem) => elem !== movie);

		setList(newState);
	};

	const getData = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${
					import.meta.env.VITE_API_KEY
				}&language=en-US&page=${page}`
			)
			.then((res) => {
				setMovieList(res.data.results);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getData();
	}, [page]);

	return (
		<div className="App">
			<Header></Header>
			<main>
				<MovieScreen
					addMovie={addMovie}
					movieList={movieList}
					page={page}
					setPage={setPage}
					list={list}
					removeMovie={removeMovie}
				></MovieScreen>
				<Watchlist list={list} removeMovie={removeMovie}></Watchlist>
			</main>
		</div>
	);
}

export default App;
