import "../Movie.css";
import { Link } from "react-router-dom";

function MovieSummary(props) {
  return (
    <section className="Movie">
      <div>
        {props.movieDetails.imgURL !== undefined ? (
          <img src={props.movieDetails.imgURL} />
        ) : (
          <p>No image</p>
        )}
        <h2>{props.movieDetails.title}</h2>
      </div>

      <div>
        {/* <div>
          {props.movieDetails.genres.map((elm) => {
            return <span> {elm} </span>;
          })}
        </div> */}
        <p>Rating : {props.movieDetails.rating}</p>
        {props.movieDetails.rating > 8 && <p id="recommendedMovie">RECOMMENDED</p>}
        <div>
        <button
          onClick={function () {
            props.callbackToDelete(props.movieDetails.id);
          }}
        >
          &#10060;
        </button>

        </div>
        <Link to={`/movies/${props.movieDetails.id}`}>More Details</Link>
      </div>
    </section>
  );
}

export default MovieSummary;
