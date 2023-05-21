import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className='w-full h-[20rem] flex justify-center items-center text-center'>
      <div className='w-20 h-20 rounded-full border-8 border-blue-600 border-r-white border-l-white border-b-white animate-spin'></div>
    </div>
  );
};

export default Spinner;
