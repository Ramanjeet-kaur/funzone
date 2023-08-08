import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MovieContainer = ({ show }) => {
  const imageUrl = show.image && show.image.medium ? show.image.medium : require('../error.png');
  return (
    <div className="card mb-3 card-black">
      <img
        src={imageUrl}
        className="card-img-top"
        alt="Movie Poster"
      />
      <div className="card-body ">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">Genre: {show.genres.join(', ')}</p>
        <Button className="button" variant="outline-secondary"><Link className='summary-link' to={`/movie/${show.id}`}>
          View More
        </Link>
        </Button>
      </div>
    </div>
  );
};

export default MovieContainer;
