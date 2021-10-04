import React from 'react'
import './MovieList.css'

const MovieList = (props) => {
    return (
        <div className='row moviesContainer'>
            {props.movies.map((movie, index) => (
				<div className='imgContainer col-lg-2 m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div className='overlay'>
                        {movie.Title}
                    </div>
				</div>
            ))}
        </div>
    )
}

export default MovieList
