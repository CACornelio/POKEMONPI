import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to my Pokedex</h1>
      <Link to="/home">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default LandingPage;
