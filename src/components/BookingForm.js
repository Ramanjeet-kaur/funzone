import React, { useState } from 'react';

const BookingForm = ({ movieDetails }) => {
  const [formData, setFormData] = useState({
    movieName: movieDetails.name,
    numberOfTickets: 1,
   
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const userId = Math.floor(Math.random() * 1000000);

    localStorage.setItem(`user_${userId}`, JSON.stringify(formData));

    alert(`Your booking has been confirmed! Your User ID is: ${userId}`);
    const storedValue = localStorage.getItem(`user_${userId}`, JSON.stringify(formData));
    console.log("Stored value:", storedValue);
  };
 

  return (
    <div className="card-form">
      <div className="card-form-body">
        <h3>Book a Movie Ticket</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Movie Name</label>
            <input
              type="text"
              className="form-control"
              name="movieName"
              value={formData.movieName}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Tickets</label>
            <input
              type="number"
              className="form-control"
              name="numberOfTickets"
              value={formData.numberOfTickets}
              onChange={handleChange}
              min="1" 
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
