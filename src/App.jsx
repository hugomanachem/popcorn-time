import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import AddMovieForm from "./components/AddMovieForm";
import Footer from "./components/Footer";
import movies from "./data/movies.json";
import "./App.css";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);


  const orderMoviesByRatingDesc = () => {
    let sortedArray = structuredClone(moviesToDisplay);

    sortedArray.sort((a, b) => b.rating - a.rating);

    setMoviesToDisplay(sortedArray);
    setSortRatingButton(
      <button onClick={orderMoviesByRatingAsc}>Order by rating Asc</button>
    );
  };

  const [sortRatingButton, setSortRatingButton] = useState(
    <button onClick={orderMoviesByRatingDesc}>Order by rating Desc</button>
  );

  const orderMoviesByRatingAsc = () => {
    let sortedArray = structuredClone(moviesToDisplay);

    sortedArray.sort((a, b) => a.rating - b.rating);

    setMoviesToDisplay(sortedArray);
    setSortRatingButton(
      <button onClick={orderMoviesByRatingDesc}>Order by rating Desc</button>
    );
  };

const addNewMovie = (newMovie) => {
  const movieIds = moviesToDisplay.map((elm) => elm.id)

  const maxId = Math.max(...movieIds);
  const nextId = maxId + 1;

  const movieDetails = {
    ...newMovie,
    id : nextId
  }

  const newList = [movieDetails,...moviesToDisplay];
  setMoviesToDisplay(newList);
}

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((elm) => {
      if (elm.id === movieId) {
        return false;
      } else {
        return true;
      }
    });
    setMoviesToDisplay(newList);
  };

  return (
    <>
      <Header />
      <AddMovieForm callbackToAddMovie={addNewMovie} moviesToDisplay={moviesToDisplay} callBackToSetMoviesToDisplay = {setMoviesToDisplay}/>
      
      {sortRatingButton}
      <MovieList moviesArray={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />
    </>
  );
}

export default App;
