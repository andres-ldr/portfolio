import React, { useEffect, useRef, useState } from 'react';
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
  const jobRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMarging: '0px',
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          observer.unobserve(entry.target);
        }
      },
      options
    );
    if (jobRef.current) observer.observe(jobRef.current);
    return () => {
      if (jobRef.current) observer.unobserve(jobRef.current);
    };
  }, [jobRef, options]);
  return (
    <div
      ref={jobRef}
      className={`max-lg:hidden w-1/2 h-full flex flex-col justify-start pt-8 space-y-10 transition-all ${
        isSelected ? 'flex' : 'hidden'
      } ${isVisible ? 'animate-show' : 'opacity-0'} `}
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
