import React, { useEffect } from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
  useEffect(() => {}, []);

  const executeScroll = (id: string) => {
    let element = document.getElementById(id) as HTMLElement;
    element.scrollIntoView();
  };

  return (
    <div className='fixed bg-slate-100 top-0 w-full flex justify-center z-20'>
      <div className='w-3/4 flex justify-between bg-transparent p-6 z-20'>
        <h1 className='text-3xl'>Logo</h1>
        <div className='flex space-x-14 leading-none'>
          <a
            href='#about-me'
            className='font-bold text-xl leading-none p-2  hover-underline-animation'
          >
            About
          </a>
          <a
            href='#'
            className='font-bold text-xl leading-none p-2  hover-underline-animation'
          >
            Skillset
          </a>
          <a
            href='#'
            className='font-bold text-xl leading-none p-2  hover-underline-animation'
          >
            Experience
          </a>
          <a
            href='#'
            className='font-bold text-xl leading-none p-2  hover-underline-animation'
          >
            Portfolio
          </a>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
