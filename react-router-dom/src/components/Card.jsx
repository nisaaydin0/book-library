import React from 'react';
import { Link } from 'react-router-dom'; 

const Card = ({ book }) => {
  return (
    <div key={book.id} className='card shadow p-2'>
      <img src={book.image} alt={book.title} className='book-image' />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <Link to={`/detail/${book.id}`} className="btn btn-primary">
  Detay Gör
</Link>


    </div>
  );
};

export default Card;
