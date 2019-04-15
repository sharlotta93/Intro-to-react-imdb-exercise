import React, {Component} from 'react';
import MovieList from '../components/MovieList';

class MovieBox extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [
      {
        id: 1,
        name: "Avengers: Endgame",
        url: "https://www.imdb.com/title/tt4154796/?ref_=rlm"
      },
      {
        id: 2,
        name: "Tolkien",
        url: "https://www.imdb.com/title/tt3361792/?ref_=rlm"
      },
      {
        id: 3,
        name: "A Dog's Journey",
        url: "https://www.imdb.com/title/tt8385474/?ref_=rlm"
      },
      {
        id: 4,
        name: "Pokémon Detective Pikachu",
        url: "https://www.imdb.com/title/tt5884052/?ref_=rlm"
      },
      {
        id: 5,
        name: "Aladdin",
        url: "https://www.imdb.com/title/tt6139732/?ref_=rlm"
      }
    ]
  }
}

  render() {
    return (
      <div className="movie-box">
        <h2 className="title">Upcoming Film Releases for UK</h2>
        <MovieList data={this.state.data}/>
        <button><a href="https://www.imdb.com/calendar/?region=gb">View More Upcoming Releases >> </a></button>
      </div>
    );
  }
}

export default MovieBox;
