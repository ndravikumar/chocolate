import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink to='/' exact activeClassName='active'>
            Logo
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/cart' className='cart-title' activeClassName='active'>
            Cart{' '}
            <span className='count'>
              <sup>{cart.length}</sup>
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
