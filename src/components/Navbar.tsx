import React from 'react';
import { useScrollDirection } from './hooks/useScrollDirection';
import MenuBtn from './MenuBtn';

const Navbar: React.FC = () => {
  const direction = useScrollDirection();

  return (
    <div
      id='nav-bar'
      className={`navbar ${direction === 'down' ? ' hide' : ''}`}
    >
      <div>
        <MenuBtn />
        <h1 className='text-3xl'>Logo</h1>
        <div className='flex space-x-14 leading-none max-lg:hidden'>
          <a href='#about-me' className='navbar-link'>
            About
          </a>
          <a href='#skills' className='navbar-link'>
            Skillset
          </a>
          <a href='#work-experience' className='navbar-link'>
            Experience
          </a>
          <a href='#portfolio' className='navbar-link'>
            Portfolio
          </a>
          <a href='#contact-me' className='button-white-navbar'>
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
