function Movie(props) {
  return (
    <section className="Movie">
      {props.movieDetails.imgURL !== undefined ? (
        <img src={props.movieDetails.imgURL} />
      ) : (
        <p>No image</p>
      )}
      <h2>{props.movieDetails.title}</h2>
      <p>Rating : {props.movieDetails.rating}</p>
      {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}
      <button onClick={function () { props.callbackToDelete(props.movieDetails.id)}}>&#10060;</button>
      <hr />
    </section>
  );
}

export default Movie;
