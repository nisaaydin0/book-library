import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
<header className='navbar bg-body-tertiary'>
    <div className='container-fluid d-flex justify-content-around'>
        <span className='navbar-brand fs-3'>Kitap Kurdu</span>
        <nav className='d-flex gap-4'>
            <NavLink to={'/'}>
                Anasayfa
            </NavLink>
            <NavLink to={'/product'}>
               ürünler
            </NavLink>
            <NavLink to={'/category'}>
               Kategori
            </NavLink>
        </nav>
    </div>
</header>
  )
}

export default Header;
