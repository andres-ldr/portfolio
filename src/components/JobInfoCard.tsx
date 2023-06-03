import React, { Fragment, useEffect, useRef, useState } from 'react';

interface JobInfoCardProps {
  post: string;
  date_start: string;
  date_end: string;
  description: string;
  goals: string[];
  stack: string[];
  isSelected: boolean;
}

const JobInfoCard: React.FC<JobInfoCardProps> = ({
  post,
  date_start,
  date_end,
  description,
  goals,
  stack,
  isSelected,
}) => {
  const cardResponsiveRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: null,
    rootMarging: '0px',
    threshold: 0.3,
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

    if (cardResponsiveRef.current) observer.observe(cardResponsiveRef.current);
    if (cardResponsiveRef.current) observer.observe(cardResponsiveRef.current);
    return () => {
      if (cardResponsiveRef.current)
        observer.unobserve(cardResponsiveRef.current);
      if (cardResponsiveRef.current)
        observer.unobserve(cardResponsiveRef.current);
    };
  }, [cardResponsiveRef, options]);

  return (
    <div
      ref={cardResponsiveRef}
      className={`${
        isSelected
          ? `job-desc-responsive ${isVisible ? 'animate-show' : 'opacity-0'}`
          : 'hidden'
      }`}
    >
      <h4 className='font-semibold text-lg'>{post}</h4>
      <h6 className='text-sm font-light text-black'>
        {date_start} - {date_end}
      </h6>
      <h4 className='text-2xl font-semibold max-lg:text-base'>Description:</h4>
      <p className='text-lg max-lg:text-sm'>{description}</p>
      <h4 className='text-2xl font-semibold max-lg:text-base'>
        Reached goals:
      </h4>
      {/* goals */}
      <ul className='text-lg list-disc space-y-5'>
        {goals.map((goal: string) => (
          <li className='max-lg:text-sm max-lg:list-inside'>{goal}</li>
        ))}
      </ul>
      {/* tags */}
      <div className='flex mt-12 flex-wrap'>
        {stack.map((skill: string) => (
          <div className='tag'>{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default JobInfoCard;
