import React from 'react';

interface Props {
  right: number;
  top: number;
}

const Card: React.FC<Props> = ({ right, top }) => {
  return (
    <div
      className={`absolute w-96 rounded-xl shadow-md p-16 flex flex-col justify-center top-20 right-20`}
    >
      <h4 className='text-lg font-semibold mb-5'>Frontend Development</h4>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas
        eligendi omnis minus inventore iure amet officiis, quos perspiciatis
        repellendus? Minus architecto.
      </p>
    </div>
  );
};

export default Card;
