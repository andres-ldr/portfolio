import React from 'react';
import portraitIMG from '../../public/images/portrait.png';

const Hero: React.FC = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='w-3/4 h-screen relative'>
        <div className='absolute left-52 top-64 w-4'>
          <h1 className='text-7xl font-bold'>Andrés López</h1>
        </div>
        <img
          src={portraitIMG}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 scale-150 z-10'
        />
        <div className='absolute text-slate-600 right-56 top-96 w-64'>
          <h2 className='text-5xl font-semibold'>
            Full Stack Developer & Data scientist
          </h2>
        </div>
        <div className='bg-slate-500 h-80 w-80 absolute bottom-0 left-1/2 -translate-x-1/2 '></div>
      </div>
    </div>
  );
};

export default Hero;
