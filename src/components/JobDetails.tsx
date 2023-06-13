import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';
interface JDProps {
  description: string;
  goals: string[];
  stack: string[];
  isSelected: boolean;
}
const JobDetails: React.FC<JDProps> = ({
  description,
  goals,
  stack,
  isSelected,
}) => {
  const [jobRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMarging: '0px',
    threshold: 0.1,
  });

  return (
    <div
      ref={jobRef}
      className={`max-lg:hidden w-1/2 h-full flex flex-col justify-start pt-8 space-y-10 transition-all ${
        isSelected ? 'flex' : 'hidden'
      } ${isVisible ? 'animate-show075' : 'opacity-0'} `}
    >
      <h4 className='text-2xl font-semibold text-left'>Description:</h4>
      <p className='text-left text-lg'>{description}</p>
      <h4 className='text-2xl font-semibold text-left'>Reached goals:</h4>
      {/* goals */}
      <ul className='text-left text-lg list-disc space-y-5'>
        {goals.map((goal) => (
          <li key={goal} className=''>
            {goal}
          </li>
        ))}
      </ul>
      {/* tags */}
      <div className='flex mt-12 flex-wrap'>
        {stack.map((skill) => (
          <div key={skill} className='tag'>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
