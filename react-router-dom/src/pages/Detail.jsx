import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams(); // Get the book ID from the URL parameters
  const [book, setBook] = useState(null); // State to store book details

  useEffect(() => {
    axios
      .get(`http://localhost:3030/books/${id}`)
      .then((res) => {
        console.log("Book fetched:", res.data); // Debug
        setBook(res.data);
      })
      .catch((err) => console.error("Error fetching book details:", err));
  }, [id]);

  return (
    <div>
      <h1>Book Details</h1>
    
      {/* Show loading message if data is not yet available */}
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Year:</strong> {book.year}</p>
          <img src={book.image} alt={book.title} style={{ width: "200px" }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
