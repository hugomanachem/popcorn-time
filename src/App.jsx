import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import movies from "./data/movies.json";
import "./App.css";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [imgURL, setImgURL] = useState("");

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

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((elm) => {
      if (elm.title === movieTitle) {
        return false;
      } else {
        return true;
      }
    });
    setMoviesToDisplay(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL,
    };

    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);

    // clear the form
    setTitle("");
    setRating(0);
    setImgURL("");
  };

  return (
    <>
      <Header />

      <section>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="Enter the title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
          </label>

          <label>
            Rating :
            <input
              type="number"
              min={0}
              max={10}
              name="rating"
              placeholder="Enter the rating"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
            />
          </label>

          <label>
            Image URL :
            <input
              type="text"
              name="imgURL"
              placeholder="Enter the image URL"
              value={imgURL}
              onChange={(e) => {
                setImgURL(e.target.value);
              }}
            />
          </label>

          <button type="submit">Create movie</button>
        </form>
      </section>
      {sortRatingButton}
      <Main moviesArray={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />
    </>
  );
}

export default App;
