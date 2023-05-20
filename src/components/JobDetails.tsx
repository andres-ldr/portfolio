import React from 'react';
interface JDProps {
  description: string;
  goals: string[];
  skills: string[];
  isSelected: boolean;
}
const JobDetails: React.FC<JDProps> = ({
  description,
  goals,
  skills,
  isSelected,
}) => {
  return (
    <div
      className={`${
        isSelected ? 'flex' : 'hidden'
      } w-1/2 h-full flex-col justify-start p-10 space-y-10 animate-show`}
    >
      <h4 className='text-2xl font-semibold text-left'>Description:</h4>
      <p className='text-left text-lg'>{description}</p>
      <h4 className='text-2xl font-semibold text-left'>Reached goals:</h4>
      {/* skills */}
      <ul className='text-left text-lg list-disc space-y-5'>
        {goals.map((goal) => (
          <li key={goal} className=''>
            {goal}
          </li>
        ))}
      </ul>
      {/* tags */}
      <div className='flex mt-12 flex-wrap'>
        {skills.map((skill) => (
          <div
            key={skill}
            className='bg-red-300 rounded-full m-2 pt-2 pb-2 pl-4 pr-4 border-red-600 border-2 text-red-950 font-semibold'
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetails;
