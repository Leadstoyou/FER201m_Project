import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
      comments: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    const films = JSON.parse(localStorage.getItem("films"));
    const film = films.find((m) => m.id === parseInt(id));

    const comments = JSON.parse(localStorage.getItem("comments"));
    const filmComments = comments.filter((c) => c.filmId === parseInt(id));

    this.setState({
      film: film,
      comments: filmComments
    });
  }

  render() {
    const { film, comments } = this.state;



    return (
      <div>
        <Navbar />
        <h2>{film.name}</h2>
        <img src={film.imageUrl} alt={film.name} />
        <p>Category: {film.category}</p>
        <p>Description: {film.description}</p>
        <p>Score: {film.score}</p>

        <h3>Comments</h3>

          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.content}</p>
                <p>By {comment.username}</p>
              </li>
            ))}
          </ul>
        
        <Footer />
      </div>
    );
  }
}

export default MovieDetails;
