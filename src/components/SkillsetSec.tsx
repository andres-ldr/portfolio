import React from 'react';
import SwiperComponent from './SwiperComponent';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SkillsetSec = () => {
  useGSAP(() => {
    gsap.from('.child', {
      scrollTrigger: {
        trigger: '.box',
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      ease: 'power3.out',
      duration: 1,
    });
  }, []);

  return (
    <div
      id='services'
      className='box max-container relative flex flex-wrap gap-14 items-center pt-20'
    >
      <div className='md:w-1/3'>
        <h2 className='child text-2xl md:text-5xl font-semibold'>Services</h2>
        <p className='child pt-10 text-sm md:text-base leading-6'>
          Welcome to the Services section, where innovation meets functionality
          to bring your digital vision to life. At the heart of my approach is a
          deep understanding of your business objectives and user needs.
        </p>
      </div>

      <SwiperComponent />
    </div>
  );
};

export default SkillsetSec;
