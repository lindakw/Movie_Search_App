import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import Nav from './Nav/Nav';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getMovie = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=dea5efc7&s=${searchText}`);
    const data = await response.json();
    
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    getMovie();
    }, []);
	
	return (
    <div>
    <Nav getMovie={getMovie} setSearchText={setSearchText} />
		<div>
          <MovieList movies={movies} />
		</div>
    </div>
	);
};



export default App;
