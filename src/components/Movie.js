import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="movie">
       <h3>{this.props.name}</h3>
    </div>
    );
  }
}

export default Movie;
