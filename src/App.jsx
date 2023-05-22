import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import MovieScreen from "./components/MovieScreen";

function App() {
	const [movieList, setMovieList] = useState([]);
	const [watchlist, setWatchlist] = useState([]);
	const [page, setPage] = useState(1);

	const getData = () => {
		axios
			.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`)
			.then((res) => {
				console.log(res.data.results)
				setMovieList(res.data.results)
			})
			.catch((error) => console.log(error));
	}

	useEffect(() => {
		getData();
	}, [page])

	return (
		<div className="App">
			<Header></Header>
			<main>
				<MovieScreen list={list} page={page} setPage={setPage} movieList={movieList} ></MovieScreen>
			</main>
		</div>
	);
}

export default App;
