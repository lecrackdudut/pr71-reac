import React, { useState } from 'react';
import Movie from './Movie';

function MovieList(props) {
    const { movies } = props;
    const [recherche, setRecherche] = useState('');

    function handleChange(event) {
        setRecherche(event.target.value); 
    }

    return (
        <>
            Recherche : <input type="text" value={recherche} onChange={handleChange}/>
            {movies.map((movie) => {
                if (movie.name.toUpperCase().includes(recherche.toUpperCase())) {
                    return (
                        <Movie movie={movie} />
                    )
                }
                return <></>;
            })}
        </>
    )
}

export default MovieList;
