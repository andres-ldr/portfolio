import React from 'react';

interface ContentProps {
  id: string;
  name: string;
  stack: string[];
}

const CardProjContent: React.FC<ContentProps> = ({ id, name, stack }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full card-project  space-y-10'>
      <h4 className='uppercase text-2xl font-semibold text-white transition-all ease-in-out duration-700'>
        {name}
      </h4>
      <div className='flex w-3/4 justify-center flex-wrap text-white text-sm mt-5 transition-all ease-in-out duration-700 space-x-3'>
        {stack.map((el) => (
          <span key={el} className='rounded-full border-white border-2 p-2 m-2'>
            {el}
          </span>
        ))}
      </div>
      <a
        href={`/portfolio/${id}`}
        className='p-3 border-2 border-white text-white rounded-lg transition-all ease-in-out duration-300 font-semibold cursor-pointer hover:bg-white hover:text-blue-600 hover:shadow-md'
      >
        Know more
      </a>
    </div>
  );
};

export default CardProjContent;
