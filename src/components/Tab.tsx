import React, { useEffect, useRef, useState } from 'react';

interface TabProps {
  id: number;
  label: string;
  clickHandler: (type: string, id: number) => void;
  isSelected: boolean;
}

const Tab: React.FC<TabProps> = ({ id, label, clickHandler, isSelected }) => {
  const [isVisible, setIsVisible] = useState(false);
  const tabRef = useRef<HTMLDivElement | null>(null);

  const options = {
    root: null,
    rootMarging: '0px',
    threshold: 0.3,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    if (tabRef.current) observer.observe(tabRef.current);

    return () => {
      if (tabRef.current) observer.unobserve(tabRef.current);
    };
  }, [tabRef, options]);

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
