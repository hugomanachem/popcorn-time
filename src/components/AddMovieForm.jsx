import { useState } from "react";

function AddMovieForm(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [imgURL, setImgURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      title: title,
      rating: rating,
      imgURL: imgURL,
    };

    props.callbackToAddMovie(newMovie);

    // clear the form
    setTitle("");
    setRating(0);
    setImgURL("");
  };

  return (
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
  );
}

export default AddMovieForm;
