import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      //-1 mean back to previous page
      navigate('/');
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
