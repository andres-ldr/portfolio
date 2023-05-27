import React from 'react';

interface ContentProps {
  id: string;
  name: string;
  stack: string[];
}

const CardProjContent: React.FC<ContentProps> = ({ id, name, stack }) => {
  return (
    <div className='card-project-content'>
      <h4>{name}</h4>
      <div>
        {stack.map((el) => (
          <span key={el} className='rounded-full border-white border-2 p-2 m-2'>
            {el}
          </span>
        ))}
      </div>
      <a href={`/portfolio/${id}`}>Know more</a>
    </div>
  );
};

export default CardProjContent;
