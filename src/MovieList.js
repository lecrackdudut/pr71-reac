import React from 'react';
import Movie from './Movie';

function MovieList(props) {
    const { movies } = props;

    return (
        <>
            {movies.map((movie) => (
                <Movie movie={movie} />
            ))}
        </>
    )
}

export default MovieList;
