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

// <script>
//   const navbar = document.getElementById('nav-bar') as HTMLDivElement;
//   const links = document.getElementsByClassName('navbar-link');
//   let movement = 0;
//   window.addEventListener('scroll', () => {
//     if (movement < window.scrollY) {
//       navbar.classList.add('hide');
//     } else {
//       navbar.classList.remove('hide');
//     }
//     movement = window.scrollY;
//   });

//   for (let i = 0; i < links.length; i++) {
//     const element = links[i];
//     element.addEventListener('click', () => {
//       setTimeout(() => {
//         navbar.classList.add('hide');
//       }, 1000);
//     });
//   }

//   const hamburguer = document.querySelector('.hamburguer') as HTMLDivElement;

//   hamburguer.addEventListener('click', () => {
//     hamburguer.children[0].classList.toggle('open');
//   });
// </script>
