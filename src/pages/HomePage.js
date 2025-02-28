// src/pages/HomePage.js
import React from 'react';

function HomePage() {
  const headerStyle = {
    backgroundColor: '#ffefef',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div className="home-page">
      <header style={headerStyle}>
        <h1>Welcome to Pizza Restaurant</h1>
        <p>We serve the best pizza in town!</p>
      </header>
      <section className="hero">
        <h1>Delicious Pizza</h1>
        <p>
          Enjoy our delicious pizzas from the comfort of your home 
          or dine in with us.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
