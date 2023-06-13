import React, { useEffect, useState } from 'react';
import Project from '../../models/Project';

type IODataType = string | Project;

const useMatrixGenerator = (
  data: IODataType[],
  chunkSize: number,
  delay: number
): [IODataType[][], boolean] => {
  const [matrix, setMatrix] = useState<IODataType[][]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const matrixGenerator = async () => {
      setIsSearching(true);
      const matrixHelper: IODataType[][] = [];
      let chunk;

      for (let i = 0; i < data.length; i += chunkSize) {
        chunk = data.slice(i, i + chunkSize);
        matrixHelper.push(chunk);
      }

      setTimeout(() => {
        setMatrix(matrixHelper);
        setIsSearching(false);
      }, delay);
    };

    matrixGenerator();
  }, [data]);

  return [matrix, isSearching];
};

export default useMatrixGenerator;
