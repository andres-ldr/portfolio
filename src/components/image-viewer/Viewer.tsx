import React, { useEffect, useRef } from 'react';
import arrowLeft from '../../../public/icons/arrow-left.svg';
import arrowRight from '../../../public/icons/arrow-right.svg';

enum DIRECTION {
  RIGHT,
  LEFT,
  START,
  END,
}

interface ViewerProps {
  images: string[];
  imageIndex: number;
  indexHandler: (index: number) => void;
}

const Viewer: React.FC<ViewerProps> = ({
  imageIndex,
  images,
  indexHandler,
}) => {
  const imagesRef = useRef<HTMLDivElement[] | null[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, images.length);

    const scrollToImgSelected = () => {
      const image = imagesRef.current[imageIndex];
      const target = image?.offsetLeft;

      wrapperRef.current?.scroll({
        top: 0,
        left: target,
        behavior: 'instant',
      });
    };

    scrollToImgSelected();
  }, [images, imageIndex]);

  const findImage = (index: number): number => {
    let target;
    const image = imagesRef.current[index];
    if (image) {
      return (target = image?.offsetLeft);
    }
    return 0;
  };

  const scroll = (target: number) => {
    wrapperRef.current?.scroll({
      top: 0,
      left: target,
      behavior: 'instant',
    });
  };

  const imageHandler = (direction: DIRECTION) => {
    let counter;
    if (direction === DIRECTION.RIGHT) {
      counter = imageIndex + 1;
      indexHandler(counter);
      if (counter < imagesRef.current.length) {
        scroll(findImage(counter));
      } else {
        counter = 0;
        indexHandler(counter);
        scroll(findImage(counter));
      }
    } else {
      counter = imageIndex - 1;
      if (counter > -1) {
        indexHandler(counter);

        scroll(findImage(counter));
      } else {
        counter = imagesRef.current.length - 1;
        indexHandler(counter);

        scroll(findImage(counter));
      }
    }
  };

  return (
    <div className='w-3/4 h-0 grow relative max-lg:w-screen'>
      <div
        id='wrapper-viewer'
        ref={wrapperRef}
        className='image-viewer__wrapper'
      >
        {images.map((url) => {
          return (
            <div
              key={images.indexOf(url)}
              ref={(el) => (imagesRef.current[images.indexOf(url)] = el)}
              style={{
                backgroundImage: `url("${url}")`,
              }}
              className='image-viewer-image'
            />
          );
        })}
      </div>
      {/* arrows */}
      <div className='arrows-container'>
        <span
          id='arrow-left'
          onClick={() => imageHandler(DIRECTION.LEFT)}
          className='arrows-container__btn'
        >
          <img src={arrowLeft} className='w-8 h-8' />
        </span>
        <span
          id='arrow-right'
          onClick={() => imageHandler(DIRECTION.RIGHT)}
          className='arrows-container__btn'
        >
          <img src={arrowRight} className='w-8 h-8' />
        </span>
      </div>
    </div>
  );
};

export default Viewer;
