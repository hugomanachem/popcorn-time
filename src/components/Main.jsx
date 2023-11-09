import movies from '../data/movies.json'
import Movie from './Movie';
import { useState } from 'react';

function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const[sortRatingButton, setSortRatingButton] = useState(<button onClick={orderMoviesByRatingDesc}>Order by rating Desc</button>);
    let message = '';
    
    

    if(moviesToDisplay.length > 0) {
        message = <h1>Numbers of movies : {moviesToDisplay.length}</h1>
    } else {
        message = <h2>Sorry, no movies....</h2>
    }

    function deleteMovie(moviesId) {
        const newList = moviesToDisplay.filter((elm) => {
            if (elm.id === moviesId) {
                return false;
            } else {
                return true;
            }
        })
        setMoviesToDisplay(newList)
    }

    function orderMoviesByRatingDesc(){
        let sortedArray = structuredClone(moviesToDisplay);
       
        sortedArray.sort((a,b) => b.rating - a.rating);
            
        setMoviesToDisplay(sortedArray);
        setSortRatingButton(<button onClick={orderMoviesByRatingAsc}>Order by rating Asc</button>)
    }

    function orderMoviesByRatingAsc(){
        let sortedArray = structuredClone(moviesToDisplay);
        
        sortedArray.sort((a,b) => a.rating - b.rating);

        setMoviesToDisplay(sortedArray);
        setSortRatingButton(<button onClick={orderMoviesByRatingDesc}>Order by rating Desc</button>)
    }


    return(
        <>
        {message}
        {sortRatingButton}
            {moviesToDisplay.map(function(elm){
                return (
                    <Movie key={elm.id} movieDetails={elm} callbackToDelete={deleteMovie}/>
                )
            })}
        </>
        
    );
}

export default Main;