import React from 'react';
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
  return (
    <div
      className={`${
        isSelected ? 'flex' : 'hidden'
      } w-1/2 h-full flex-col justify-start pl-10 pt-8 space-y-10 animate-show max-lg:hidden`}
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
