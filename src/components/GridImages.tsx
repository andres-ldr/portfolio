import React, { Fragment, useEffect, useState } from 'react';
import ImageViewer from './ImageViewer';

interface Images {
  images: string[];
}

const GridImages: React.FC<Images> = ({ images }) => {
  const [matrix, setMatrix] = useState<string[][]>([]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  useEffect(() => {
    const matrixGenerator = async () => {
      let chunkSize = 6;
      const matrixHelper: string[][] = [];

      for (let i = 0; i < images.length; i += chunkSize) {
        let chunk;
        chunk = images.slice(i, i + chunkSize);
        matrixHelper.push(chunk);
      }

      setMatrix(matrixHelper);
    };

    matrixGenerator();
  }, []);

  const imageClickHandler = (id: number) => {
    setImageIndex(id);
  };

  const viewerVisibilityHandler = (id?: number) => {
    setIsViewerVisible(!isViewerVisible);
    if (id !== undefined) {
      imageClickHandler(id);
    }
  };

  return (
    <Fragment>
      {isViewerVisible && (
        <ImageViewer
          index={imageIndex}
          images={images}
          closeHandler={viewerVisibilityHandler}
        />
      )}
      {!isViewerVisible && (
        <>
          {matrix.length !== 0 ? (
            matrix.map((grid) => {
              return (
                <div className='w-full h-[50rem] mt-5 grid grid-cols-8 grid-rows-8 gap-2'>
                  {grid.map((imgUrl) => {
                    let index = 0;
                    if (matrix.indexOf(grid) < 0) {
                      index = grid.indexOf(imgUrl);
                    } else {
                      index = matrix.indexOf(grid) * 6 + grid.indexOf(imgUrl);
                    }
                    let m: number = grid.indexOf(imgUrl) % 6;
                    switch (m) {
                      case 0:
                        return (
                          <div className='image-card relative overflow-hidden col-span-4 row-span-3 rounded-lg'>
                            {/* image */}
                            <div
                              key={imgUrl}
                              style={{
                                backgroundImage: `url("${imgUrl}")`,
                              }}
                              className={`card__image w-full h-full bg-no-repeat bg-cover bg-center transition-all hover:scale-150`}
                            ></div>
                            {/* cover */}
                            <div className='absolute w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center translate-y-full transition inset-0'>
                              <span
                                onClick={() => viewerVisibilityHandler(index)}
                                className='w-40 text-white cursor-pointer font-bold inset-0 pt-4 pb-4 border-2 rounded-lg uppercase text-xl transition text-center content-center hover:bg-white hover:text-black'
                              >
                                view
                              </span>
                            </div>
                          </div>
                        );
                      case 1:
                        return (
                          <div
                            key={imgUrl}
                            className={`image-card relative overflow-hidden col-span-2 row-span-5 col-start-5 rounded-lg`}
                          >
                            {/* image */}
                            <div
                              key={imgUrl}
                              style={{
                                backgroundImage: `url("${imgUrl}")`,
                              }}
                              className={`card__image w-full h-full bg-no-repeat bg-cover bg-center transition-all hover:scale-150`}
                            ></div>
                            {/* cover */}
                            <div className='absolute w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center translate-y-full transition inset-0'>
                              <span
                                onClick={() => viewerVisibilityHandler(index)}
                                className='w-40 text-white cursor-pointer font-bold inset-0 pt-4 pb-4 border-2 rounded-lg uppercase text-xl transition text-center content-center hover:bg-white hover:text-black'
                              >
                                view
                              </span>
                            </div>
                          </div>
                        );
                      case 2:
                        return (
                          <div
                            key={imgUrl}
                            className={`image-card relative overflow-hidden rounded-lg col-span-2 row-span-5 col-start-7`}
                          >
                            {/* image */}
                            <div
                              key={imgUrl}
                              style={{
                                backgroundImage: `url("${imgUrl}")`,
                              }}
                              className={`card__image w-full h-full bg-no-repeat bg-cover bg-center transition-all hover:scale-150`}
                            ></div>
                            {/* cover */}
                            <div className='absolute w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center translate-y-full transition inset-0'>
                              <span
                                onClick={() => viewerVisibilityHandler(index)}
                                className='w-40 text-white cursor-pointer font-bold inset-0 pt-4 pb-4 border-2 rounded-lg uppercase text-xl transition text-center content-center hover:bg-white hover:text-black'
                              >
                                view
                              </span>
                            </div>
                          </div>
                        );
                      case 3:
                        return (
                          <div
                            key={imgUrl}
                            className={`image-card relative overflow-hidden rounded-lg col-span-2 row-span-5 row-start-4`}
                          >
                            {/* image */}
                            <div
                              key={imgUrl}
                              style={{
                                backgroundImage: `url("${imgUrl}")`,
                              }}
                              className={`card__image w-full h-full bg-no-repeat bg-cover bg-center transition-all hover:scale-150`}
                            ></div>
                            {/* cover */}
                            <div
                              onClick={() => viewerVisibilityHandler(index)}
                              className='absolute w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center translate-y-full transition inset-0'
                            >
                              <span className='w-40 text-white cursor-pointer font-bold inset-0 pt-4 pb-4 border-2 rounded-lg uppercase text-xl transition text-center content-center hover:bg-white hover:text-black'>
                                view
                              </span>
                            </div>
                          </div>
                        );
                      case 4:
                        return (
                          <div
                            key={imgUrl}
                            className={`w-full image-card relative overflow-hidden rounded-lg col-span-2 row-span-5 col-start-3 row-start-4`}
                          >
                            {/* image */}
                            <div
                              key={imgUrl}
                              style={{
                                backgroundImage: `url("${imgUrl}")`,
                              }}
                              className={`card__image w-full h-full bg-no-repeat bg-cover bg-center transition-all hover:scale-150`}
                            ></div>
                            {/* cover */}
                            <div
                              onClick={() => viewerVisibilityHandler(index)}
                              className='absolute w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center translate-y-full transition inset-0'
                            >
                              <span className='w-40 text-white cursor-pointer font-bold inset-0 pt-4 pb-4 border-2 rounded-lg uppercase text-xl transition text-center content-center hover:bg-white hover:text-black'>
                                view
                              </span>
                            </div>
                          </div>
                        );
                      default:
                        return (
                          <div
                            key={imgUrl}
                            className={`w-full image-card relative overflow-hidden rounded-lg col-span-4 row-span-3 col-start-5 row-start-6`}
                          >
                            {/* image */}
                            <div
                              key={imgUrl}
                              style={{
                                backgroundImage: `url("${imgUrl}")`,
                              }}
                              className={`card__image w-full h-full bg-no-repeat bg-cover bg-center transition-all hover:scale-150`}
                            ></div>
                            {/* cover */}
                            <div
                              onClick={() => viewerVisibilityHandler(index)}
                              className='absolute w-full h-full bg-opacity-50 bg-black flex flex-col justify-center items-center translate-y-full transition inset-0'
                            >
                              <span className='w-40 text-white cursor-pointer font-bold inset-0 pt-4 pb-4 border-2 rounded-lg uppercase text-xl transition text-center content-center hover:bg-white hover:text-black'>
                                view
                              </span>
                            </div>
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
          )}
        </>
      )}
    </Fragment>
  );
};

export default GridImages;
