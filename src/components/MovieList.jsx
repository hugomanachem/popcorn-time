
import MovieSummary from './MovieSummary';
import { useState } from 'react';

function MovieList(props) {
    let message = '';
    
    

    if(props.moviesArray.length > 0) {
        message = <h1>Numbers of movies : {props.moviesArray.length}</h1>
    } else {
        message = <h2>Sorry, no movies....</h2>
    }

    


    return(
        <>
        {message}
            {props.moviesArray.map(function(elm,i){
                return (
                    <MovieSummary key={i} movieDetails={elm} callbackToDelete={props.callbackToDelete}/>
                )
            })}
        </>
        
    );
}

export default MovieList;