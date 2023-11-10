import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

function MovieDetails(props) {
  const { movieId } = useParams();

  const movieDetails = props.moviesArray.find((movie) => {
    return movie.id == movieId;
  });
  console.log(movieDetails);

  return (
    <>
      <h1>{movieDetails.title}</h1>
      {movieDetails.imgURL !== undefined ? (
        <img src={movieDetails.imgURL} />
      ) : (
        <p>No image</p>
      )}
      {movieDetails.rating && <h2>Rating : {movieDetails.rating}</h2>}
      {movieDetails.year && <h2>Year : {movieDetails.year}</h2>}
      {movieDetails.genres &&
        movieDetails.genres.map((genre) => {
          return <span className="badge">{genre}</span>;
        })}
    <p>
    <Link to="/">Back to home</Link>
    </p>
    </>
  );
}

export default MovieDetails;
