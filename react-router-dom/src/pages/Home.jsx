import React from 'react';

const Home = () => {
  return (
    <div className='container my-5 d-flex flex-column align-items-center gap-5'>
      <h1 className=''>Hoşgeldiniz! </h1>
      <img className='img-fluid rounded image' src="/welcome-images.webp" alt="welcome-img" />
      <p>Ürünler sayfasından yeni çıkan bütün kitaplara ulaşabilirsiniz !</p>
    </div>
  )
}

export default Home;
