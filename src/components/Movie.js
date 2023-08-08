import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieContainer from './MovieContainer';

const Movie = () => {
  const [content, setContent] = useState([]);

  const fetchContent = async () => {
    try {
      const response = await axios.get(
        'https://api.tvmaze.com/search/shows?q=all'
      );

      setContent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);
  // console.log(content);
  return (
    <div className='container-box'>
      <h1>Popular Shows</h1>
      <div className='box'>
        {content && content.map((item) =>
          ( <div className='card' key={item.show.id}>
            <MovieContainer show={item.show} />
          </div>)
        )}
      </div>
    </div>
  );
};

export default Movie;
