import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Movie from './components/Movie';
import Navbar from './components/Navbar';
import MovieDetails from './components/MovieDetails'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
