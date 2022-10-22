import React from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  console.log('location', location);
  return (
    <div>
      <h1>Home</h1>
      {location.state.name}
    </div>
  );
}

export default Home;
