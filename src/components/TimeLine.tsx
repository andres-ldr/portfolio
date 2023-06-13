import React, { useState } from 'react';
import TimeLineCard from './TimeLineCard';
import JobDetails from './JobDetails';
import Job from '../models/Job';

interface TimeLineProps {
  jobs: Job[];
}

const TimeLine: React.FC<TimeLineProps> = ({ jobs }) => {
  const [selectedCard, setSelectedCard] = useState(jobs[0].id);

  const onCardSelected = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <div className='flex w-full h-full mt-52 space-x-32 justify-evenly max-2xl:justify-between max-lg:flex-col'>
      <div className='relative w-auto h-full flex flex-col justify-start items-center space-y-8 max-lg:w-full max-lg:space-y-4'>
        <span className='lazy-element time-line'></span>
        {jobs.map(
          ({
            id,
            company,
            date_end,
            date_start,
            post,
            image,
            description,
            goals,
            stack,
          }) => (
            <TimeLineCard
              key={id}
              id={id}
              company={company}
              date_start={date_start}
              date_end={date_end}
              post={post}
              image={image}
              isSelected={selectedCard === id}
              handler={onCardSelected}
              description={description}
              goals={goals}
              stack={stack}
            />
          )
        )}
      </div>

      {jobs.map(({ id, description, goals, stack }) => (
        <JobDetails
          key={id}
          description={description}
          goals={goals}
          stack={stack}
          isSelected={selectedCard === id}
        />
      ))}
    </div>
  );
};

export default TimeLine;
