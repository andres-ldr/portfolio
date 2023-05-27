import React from 'react';

interface JobsProps {
  id: string;
  company: string;
  post: string;
  date_start: string;
  date_end: string;
  isSelected: boolean;
  image: string;
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
}) => {
  return (
    <div
      onClick={() => handler(id)}
      className={`time-line-card ${
        isSelected ? 'time-line-card__selected' : 'bg-white'
      }`}
    >
      <img src={image} alt={image} className='scale-75' />
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
