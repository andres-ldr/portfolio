import React, { Fragment } from 'react';

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
  return (
    <Fragment>
      <div
        onClick={() => handler(id)}
        className={`time-line-card ${
          isSelected ? 'time-line-card__selected' : 'bg-white'
        }`}
      >
        <img src={image} alt={image} className='w-16 h-auto max-lg:w-12' />
        <div className='flex flex-col grow justify-start item-center text-left max-lg:space-y-2'>
          <div className='flex justify-between'>
            <h4 className='font-bold text-lg max-lg:text-base'>{company}</h4>
            <h6 className='text-sm max-lg:hidden'>
              {date_start} - {date_end}
            </h6>
          </div>
        </div>
      </div>
      <div
        className={`${
          isSelected && 'max-lg:flex'
        } w-0 hidden h-full text-left flex-col justify-start space-y-10 rounded-2xl shadow-md animate-show  max-lg:w-full max-lg:justify-center max-lg:bg-white max-lg:p-5`}
      >
        <h4 className='font-semibold text-lg'>{post}</h4>
        <h6 className='text-sm font-light text-black'>
          {date_start} - {date_end}
        </h6>
        <h4 className='text-2xl font-semibold max-lg:text-base'>
          Description:
        </h4>
        <p className='text-lg max-lg:text-sm'>{description}</p>
        <h4 className='text-2xl font-semibold max-lg:text-base'>
          Reached goals:
        </h4>
        {/* goals */}
        <ul className='text-lg list-disc space-y-5'>
          {goals.map((goal) => (
            <li key={goal} className='max-lg:text-sm max-lg:list-inside'>
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
    </Fragment>
  );
};

export default TimeLineCard;
