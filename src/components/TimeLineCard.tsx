import React, { Fragment } from 'react';
import JobInfoCard from './JobInfoCard';
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface JobsProps {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  isSelected: boolean;
  image: string;
  description: string;
  goals: string[];
  stack: string[];
  handler: (id: string) => void;
}

const TimeLineCard: React.FC<JobsProps> = ({
  id,
  company,
  date_end,
  date_start,
  post,
  isSelected,
  handler,
  image,
  description,
  goals,
  stack,
}) => {
  const [cardRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMarging: '0px',
    threshold: 0.3,
  });

  return (
    <Fragment>
      <div
        ref={cardRef}
        onClick={() => handler(id)}
        className={`${isVisible ? `time-line-card` : 'opacity-0'} ${
          isSelected ? 'time-line-card__selected' : 'bg-slate-50'
        }  `}
      >
        <div className='w-16 h-16 rounded-full max-lg:w-14 '>
          <img src={image} alt={image} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col grow justify-start item-center space-y-2 text-left'>
          <div className='flex justify-between'>
            <h4 className='font-bold text-lg max-lg:text-base'>{company}</h4>
            <h6 className='text-sm max-lg:hidden'>
              {date_start} - {date_end}
            </h6>
          </div>
          <h4 className='font-semibold text-lg max-lg:hidden'>{post}</h4>
        </div>
      </div>
      <JobInfoCard
        isSelected={isSelected}
        post={post}
        date_start={date_start}
        date_end={date_end}
        description={description}
        goals={goals}
        stack={stack}
      />
    </Fragment>
  );
};

export default TimeLineCard;
