import React from 'react';
import logo3d from '../../public/images/facebook3D.png';

interface JobsProps {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  isSelected: boolean;
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
}) => {
  return (
    <div
      onClick={() => handler(id)}
      className={`flex justify-start items-center w-96 h-44 rounded-3xl shadow-xl cursor-pointer p-5 z-10 transition hover:drop-shadow-2xl hover:translate-x-5 ${
        isSelected
          ? 'drop-shadow-2xl translate-x-5 bg-blue-950 border-blue-300 border-2 text-white'
          : 'bg-white'
      }`}
    >
      <img src={logo3d} alt='' className='scale-75' />
      <div className='flex flex-col grow justify-start item-center text-left space-y-2'>
        <div className='flex justify-between'>
          <h4 className='font-bold text-lg'>{company}</h4>
          <h6 className='text-sm'>
            {date_start} - {date_end}
          </h6>
        </div>
        <h5 className='font-semibold text-lg'>{post}</h5>
      </div>
    </div>
  );
};

export default TimeLineCard;
