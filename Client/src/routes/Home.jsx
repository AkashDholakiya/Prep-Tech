// Home.js

import React from 'react';
import '../css/home.css'

const Home = () => {
  return (
    <div className='home'>
      <header>
        <h1>Interview Preparation Hub</h1>
      </header>
      <section>
        <p>Welcome to our platform dedicated to interview preparation. Whether you are getting ready for a technical interview or honing your soft skills, we've got you covered!</p>
        <p>Explore our resources and tools to boost your confidence and succeed in your interviews.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum fuga aliquam ea ipsum vel corporis maiores consequatur provident eos quibusdam veniam corrupti nulla, maxime, quis perferendis quam harum voluptatem voluptate aspernatur. Non, debitis.</p>
      </section>
      <section>
        <h2>Featured Content</h2>
        <h2>Categories</h2>
        {/* Add links or components for featured content */}
      </section>
      <a href='/About' className='discolight'>
          Get your Roadmap
        </a>
        
      <footer>
        <p>&copy; 2024 Interview Preparation Hub</p>
      </footer>
    </div>
  );
};

export default Home;
