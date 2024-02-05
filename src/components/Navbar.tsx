import React, { useRef } from 'react';
import { useScrollDirection } from './hooks/useScrollDirection';

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const direction = useScrollDirection();

  const closeNavbar = () =>
    setTimeout(() => navbarRef.current?.classList.add('hide'), 1000);

  return (
    <header
      ref={navbarRef}
      id='nav-bar'
      className={`navbar ${direction === 'down' ? ' hide' : ''}`}
    >
      <div className='flex justify-between items-center max-container py-4'>
        {/* <MenuBtn closeNavbarHandler={closeNavbar} /> */}
        <h1 className='text-3xl'>Logo</h1>
        {/* Links */}
        <div className='flex gap-10 max-lg:hidden'>
          <a
            onClick={closeNavbar}
            href='#work-experience'
            className='navbar-link'
          >
            Services
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
            href='#work-experience'
            className='navbar-link'
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
