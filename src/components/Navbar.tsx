import React, { useRef } from 'react';
import { useScrollDirection } from './hooks/useScrollDirection';
import MenuBtn from './MenuBtn';

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const direction = useScrollDirection();

  const closeNavbar = () =>
    setTimeout(() => navbarRef.current?.classList.add('hide'), 1000);

  return (
    <div
      ref={navbarRef}
      id='nav-bar'
      className={`navbar ${direction === 'down' ? ' hide' : ''}`}
    >
      <div>
        <MenuBtn closeNavbarHandler={closeNavbar} />
        <h1 className='text-3xl'>Logo</h1>
        <div className='flex items-center space-x-14 leading-none max-lg:hidden'>
          <a onClick={closeNavbar} href='#about-me' className='navbar-link'>
            About
          </a>
          <a onClick={closeNavbar} href='#skills' className='navbar-link'>
            Skillset
          </a>
          <a
            onClick={closeNavbar}
            href='#work-experience'
            className='navbar-link'
          >
            Experience
          </a>
          <a onClick={closeNavbar} href='#portfolio' className='navbar-link'>
            Portfolio
          </a>
          <a
            onClick={closeNavbar}
            href='#contact-me'
            className='button-white-navbar'
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
