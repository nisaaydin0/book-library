import React, { useState, useEffect } from 'react'; // Import useState
import Filter from '../components/Filter';
import axios from 'axios';
import Card from '../components/Card';

const Product = () => {
  const [books, setBooks] = useState([]); // Initialize books state

  useEffect(() => {
    // Fetch books data from API when the component mounts
    axios
      .get("http://localhost:3030/books")
      .then((res) => setBooks(res.data)) // Set the fetched data
      .catch((err) => console.error("Error fetching books:", err)); // Handle errors
  }, []);

  return (
    <div className='container'>
      <h3>{books.length} kitap bulundu</h3>
      <Filter />
      <div className='cards-container gap-4'>
        {books.map((book) => (<Card key={book.id} book={book}/>))}
      </div>
    </div>
  );
};

export default Product;
