import React, { useState } from 'react';
import TimeLineCard from './TimeLineCard';
import JobDetails from './JobDetails';

interface Jobs {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  description: string;
  skills: string[];
  goals: string[];
}

interface Props {
  jobslist: Jobs[];
}

const TimeLine: React.FC<Props> = ({ jobslist }) => {
  const [selectedCard, setSelectedCard] = useState('0');

  const onCardSelected = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <div className='flex w-full h-full mt-52'>
      <div className='relative w-1/2 h-full flex flex-col justify-start items-center space-y-8'>
        <span className='absolute left-56 top-9 bottom-9 border-4 border-blue-950'></span>
        {jobslist.map(({ id, company, date_end, date_start, post }) => (
          <TimeLineCard
            key={id}
            id={id}
            company={company}
            date_start={date_start}
            date_end={date_end}
            post={post}
            isSelected={selectedCard === id}
            handler={onCardSelected}
          />
        ))}
      </div>

      {jobslist.map(({ id, description, goals, skills }) => (
        <JobDetails
          description={description}
          goals={goals}
          skills={skills}
          isSelected={selectedCard === id}
        />
      ))}
    </div>
  );
};

export default TimeLine;
