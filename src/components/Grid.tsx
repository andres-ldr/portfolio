import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

interface ContentProps {
  id: string;
  name: string;
  stack: string[];
}

interface Project {
  id: string;
  name: string;
  stack: string[];
  goals: string[];
  images: string[];
  link_repo: string;
  link_app: string;
  type: string;
}

interface Projects {
  projects: Project[];
}

const Content: React.FC<ContentProps> = ({ id, name, stack }) => {
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
              <div className='w-full grid grid-cols-6 grid-rows-5 gap-4 mb-3'>
                {grid.map((e) => {
                  let m: number = grid.indexOf(e) % 5;
                  switch (m) {
                    case 0:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`rounded-lg bg-no-repeat bg-cover bg-center col-span-2 row-span-3 hover:scale-[1.01]  animate-show`}
                        >
                          <Content id={e.id} name={e.name} stack={e.stack} />
                        </div>
                      );
                    case 1:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`rounded-lg bg-no-repeat bg-cover bg-center col-span-2 row-span-2 hover:scale-[1.01]  animate-show`}
                        >
                          <Content id={e.id} name={e.name} stack={e.stack} />
                        </div>
                      );
                    case 2:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`rounded-lg bg-no-repeat bg-cover bg-center col-span-2 row-span-2 col-start-3 row-start-1 hover:scale-[1.01]  animate-show`}
                        >
                          <Content id={e.id} name={e.name} stack={e.stack} />
                        </div>
                      );
                    case 3:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`rounded-lg bg-no-repeat bg-cover bg-center col-span-2 row-span-3 col-start-3 row-start-3 hover:scale-[1.01]  animate-show`}
                        >
                          <Content id={e.id} name={e.name} stack={e.stack} />
                        </div>
                      );
                    default:
                      return (
                        <div
                          key={e.id}
                          style={{ backgroundImage: `url("${e.images[0]}")` }}
                          className={`rounded-lg bg-no-repeat bg-cover bg-center col-span-2 row-span-5 col-start-5 row-start-1 hover:scale-[1.01]  animate-show`}
                        >
                          <Content id={e.id} name={e.name} stack={e.stack} />
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
