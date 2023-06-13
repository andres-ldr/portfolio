import React from 'react';
import Spinner from './Spinner';
import Project from '../models/Project';
import ItemGrid from './grids/ItemGrid';
import useMatrixGenerator from './hooks/useMatrixGenerator';

interface Projects {
  projects: Project[];
}

type IODataType = string | Project;

const Grid: React.FC<Projects> = ({ projects }) => {
  const [matrix, isSearching] = useMatrixGenerator(projects, 5, 250);

  const calcItemType = (grid: IODataType[], e: IODataType): number =>
    grid.indexOf(e) % 5;

  return (
    <div className=' mt-20'>
      {isSearching && <Spinner />}
      {!isSearching &&
        (matrix.length !== 0 ? (
          matrix.map((grid) => (
            <div
              key={matrix.indexOf(grid)}
              className='w-full grid grid-cols-6 grid-rows-5 gap-4 mb-3 max-xl:h-[50rem] max-lg:h-full max-lg:grid-cols-1'
            >
              {grid.map((e) => (
                <ItemGrid
                  key={grid.indexOf(e)}
                  type={calcItemType(grid, e)}
                  data={e}
                  total_items={5}
                  visibilityHandler={() => {}}
                />
              ))}
            </div>
          ))
        ) : (
          <div className='w-full h-[20rem] flex justify-center items-center text-center'>
            <h3 className='text-4xl'>🔍 Sorry, didn't find anything...</h3>
          </div>
        ))}
    </div>
  );
};

export default Grid;
