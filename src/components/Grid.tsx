import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import CardProjContent from './CardProjectContent';
import Project from '../models/Project';

interface Projects {
  projects: Project[];
}

const Grid: React.FC<Projects> = ({ projects }) => {
  const [gridArr, setGridArr] = useState<Project[][]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const gridHandler = async () => {
      new Promise((resolve, reject) => {
        setIsSearching(true);
        try {
          let chunkSize = 5;
          const arr: Project[][] = [];

          for (let i = 0; i < projects.length; i += chunkSize) {
            let chunk;
            chunk = projects.slice(i, i + chunkSize);
            arr.push(chunk);
          }

          setTimeout(() => {
            resolve(setGridArr(arr));
            setIsSearching(false);
          }, 250);
        } catch (error) {
          reject(error);
        }
      });
    };

    gridHandler();
  }, [projects]);

  return (
    <div className='mt-20'>
      {isSearching && <Spinner />}
      {!isSearching &&
        (gridArr.length !== 0 ? (
          gridArr.map((grid) => {
            return (
              <div className='w-full grid grid-cols-6 grid-rows-5 gap-4 mb-3 max-xl:h-[50rem] max-lg:h-full max-lg:grid-cols-1'>
                {grid.map((e) => {
                  let m: number = grid.indexOf(e) % 5;
                  switch (m) {
                    case 0:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`card-grid col-span-2 row-span-3 max-lg:col-span-1 max-lg:row-span-1 `}
                        >
                          <CardProjContent
                            id={e.id}
                            name={e.name}
                            stack={e.stack}
                          />
                        </div>
                      );
                    case 1:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`card-grid col-span-2 row-span-2 max-lg:col-span-1 max-lg:row-span-1`}
                        >
                          <CardProjContent
                            id={e.id}
                            name={e.name}
                            stack={e.stack}
                          />
                        </div>
                      );
                    case 2:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`card-grid col-span-2 row-span-2 col-start-3 row-start-1 max-lg:col-span-1 max-lg:row-span-1 `}
                        >
                          <CardProjContent
                            id={e.id}
                            name={e.name}
                            stack={e.stack}
                          />
                        </div>
                      );
                    case 3:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`card-grid col-span-2 row-span-3 col-start-3 row-start-3 max-lg:col-span-1 max-lg:row-span-1 `}
                        >
                          <CardProjContent
                            id={e.id}
                            name={e.name}
                            stack={e.stack}
                          />
                        </div>
                      );
                    default:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`card-grid col-span-2 row-span-5 col-start-5 row-start-1 max-lg:col-span-1 max-lg:row-span-1 `}
                        >
                          <CardProjContent
                            id={e.id}
                            name={e.name}
                            stack={e.stack}
                          />
                        </div>
                      );
                  }
                })}
              </div>
            );
          })
        ) : (
          <div className='w-full h-[20rem] flex justify-center items-center text-center'>
            <h3 className='text-4xl'>🔍 Sorry, didn't find anything...</h3>
          </div>
        ))}
    </div>
  );
};

export default Grid;
