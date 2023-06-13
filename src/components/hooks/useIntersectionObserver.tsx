import React, { useEffect, useRef, useState } from 'react';

interface Options {
  root: null;
  rootMarging: string;
  threshold: number;
}

const useIntersectionObserver = (
  options: Options
): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

export default useIntersectionObserver;
