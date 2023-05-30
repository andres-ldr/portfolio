import React, { useEffect, useState } from 'react';
import TimeLineCard from './TimeLineCard';
import JobDetails from './JobDetails';

interface Jobs {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  description: string;
  stack: string[];
  goals: string[];
  image: string;
}

interface Props {
  jobs: Jobs[];
}

const TimeLine: React.FC<Props> = ({ jobs }) => {
  const [selectedCard, setSelectedCard] = useState(jobs[0].id);

  const onCardSelected = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <div className='flex w-full h-full mt-52 justify-evenly max-2xl:justify-between max-lg:flex-col'>
      <div className='relative w-auto h-full flex flex-col justify-start items-center space-y-8 max-lg:w-full max-lg:space-y-4'>
        <span className='time-line'></span>
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
