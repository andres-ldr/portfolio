import React, { Fragment, useEffect, useState } from 'react';
import ImageViewer from './image-viewer/ImageViewer';
import ItemGrid from './grids/ItemGrid';
import useMatrixGenerator from './hooks/useMatrixGenerator';
import Project from '../models/Project';

interface GridImagesProps {
  images: string[];
}

type IODataType = string | Project;

const GridImages: React.FC<GridImagesProps> = ({ images }) => {
  const [matrix] = useMatrixGenerator(images, 6, 0);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isViewerVisible, setIsViewerVisible] = useState(false);

  const imageClickHandler = (id: number) => {
    setImageIndex(id);
  };

  const viewerVisibilityHandler = (id?: number) => {
    setIsViewerVisible(!isViewerVisible);
    if (id !== undefined) {
      imageClickHandler(id);
    }
  };

  const calcItemIndex = (
    matrix: IODataType[][],
    grid: IODataType[],
    imgUrl: IODataType
  ): number => {
    let index = 0;
    if (matrix.indexOf(grid) < 0) {
      index = grid.indexOf(imgUrl);
    } else {
      index = matrix.indexOf(grid) * 6 + grid.indexOf(imgUrl);
    }

    return index;
  };

  const calcItemType = (grid: IODataType[], imgUrl: IODataType): number =>
    grid.indexOf(imgUrl) % 6;

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
        <Fragment>
          {matrix.length !== 0 ? (
            matrix.map((grid) => {
              return (
                <Fragment>
                  <div className='w-full h-[50rem] mt-5 grid grid-cols-8 grid-rows-8 gap-2 max-xl:h-[30rem] max-lg:hidden'>
                    {grid.map((imgUrl) => (
                      <ItemGrid
                        data={imgUrl}
                        total_items={6}
                        type={calcItemType(grid, imgUrl)}
                        visibilityHandler={() =>
                          viewerVisibilityHandler(
                            calcItemIndex(matrix, grid, imgUrl)
                          )
                        }
                      />
                    ))}
                  </div>
                  <div className='hidden w-full h-auto mt-5 flex-col space-y-10 max-lg:flex '>
                    {grid.map((imgUrl) => (
                      <div className='image-card h-80'>
                        {/* image */}
                        <div
                          key={grid.indexOf(imgUrl)}
                          style={{
                            backgroundImage: `url("${imgUrl}")`,
                          }}
                          className={`image-card__image`}
                        ></div>
                        {/* cover */}
                        <div className='image-card__cover'>
                          <span
                            onClick={() =>
                              viewerVisibilityHandler(
                                calcItemIndex(matrix, grid, imgUrl)
                              )
                            }
                            className='image-card__cover__btn'
                          >
                            view
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Fragment>
              );
            })
          ) : (
            <div className='w-full h-[20rem] flex justify-center items-center text-center'>
              <h3 className='text-4xl'>🔍 Sorry, didn't find anything...</h3>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default GridImages;
