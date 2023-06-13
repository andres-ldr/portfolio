import React, { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';

interface TabProps {
  id: number;
  label: string;
  clickHandler: (type: string, id: number) => void;
  isSelected: boolean;
}

const Tab: React.FC<TabProps> = ({ id, label, clickHandler, isSelected }) => {
  const [tabRef, isVisible] = useIntersectionObserver({
    root: null,
    rootMarging: '0px',
    threshold: 0.3,
  });

  return (
    <h5
      ref={tabRef}
      onClick={() => clickHandler(label, id)}
      className={` ${isVisible ? 'tab' : 'opacity-0'}  ${
        isSelected ? 'text-white bg-black rounded-md' : 'rounded-full'
      }`}
    >
      {label}
    </h5>
  );
};

export default Tab;
