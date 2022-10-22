import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function Book() {
  const { id } = useParams();
  const { hello } = useOutletContext();
  return (
    <div>
      <h1>Book {id}</h1>
      <p>
        Passed from context <span style={{ fontWeight: 'bold' }}>{hello}</span>
      </p>
    </div>
  );
}

export default Book;
