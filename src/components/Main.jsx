import movies from '../data/movies.json'
import { useState } from 'react';

function Main() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    let message = '';

    if(moviesToDisplay.length > 0) {
        message = <h2>Our movies :</h2>
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
    return(

        <>
        <h1>This is the Main</h1>
        {message}
            {moviesToDisplay.map(function(elm){
                return (
                    <div key={elm.id} className="movie">
                        {elm.imgURL != undefined ? <img src={elm.imgURL}/> : <p>No image</p> }
                        <p>Title : {elm.title}</p>
                        <p>Rating : {elm.rating}</p>
                        {elm.rating > 8 && <p>RECOMMENDED</p>}
                        <button onClick={() => {deleteMovie(elm.id)}}>Delete</button>
                    </div>
                )
            })}
        </>
        
    );
}

export default Main;