import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import BookingForm from './BookingForm';
const MovieDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false); 
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShowDetails(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  const handleBookTicket = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="border">
      {showDetails ? (
        <div className=" movie_detail row mt-3">
          <div className="col-md-4 ">
            <img
              src={showDetails.image && showDetails.image.medium}
              className="img-fluid rounded"
              alt={showDetails.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{showDetails.name}</h2>
                <p className="card-text">{showDetails.summary}</p>
                <Button className="button" onClick={handleBookTicket}>
                  Book a Movie Ticket
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {showBookingForm && <BookingForm movieDetails={showDetails} />}
    </div>
  );
};

export default MovieDetails;

