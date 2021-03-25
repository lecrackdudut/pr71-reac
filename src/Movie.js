import React from 'react';

function Movie(props) {
    const { movie } = props
    return (
        <div className="movie">
            <h3 className="rouge">{movie.name} ({movie.year})</h3>
            <p>Synopsis : {movie.storyline}</p>
        </div>
    )
}

export default Movie;
