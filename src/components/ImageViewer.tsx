import React, { useEffect, useRef, useState } from 'react';
import arrowLeft from '../../public/icons/arrow-left.svg';
import arrowRight from '../../public/icons/arrow-right.svg';
import closeIcon from '../../public/icons/close.svg';

interface Images {
  images: string[];
  index: number;
  closeHandler: () => void;
}

enum DIRECTION {
  RIGHT,
  LEFT,
}

const ImageViewer: React.FC<Images> = ({ images, closeHandler, index }) => {
  const imagesRef = useRef<HTMLDivElement[] | null[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const imageSliderRef = useRef<HTMLDivElement | null>(null);
  const [imageIndex, setImageIndex] = useState(index);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, images.length);

    const image = imagesRef.current[index];
    const target = image?.offsetLeft;

    wrapperRef.current?.scroll({
      top: 0,
      left: target,
      behavior: 'instant',
    });
  }, [images]);

  const imageHandler = (direction: DIRECTION) => {
    let counter;
    if (direction === DIRECTION.RIGHT) {
      counter = imageIndex + 1;
      setImageIndex(counter);
      if (counter < imagesRef.current.length) {
        const image = imagesRef.current[counter];
        const target = image?.offsetLeft;

        wrapperRef.current?.scroll({
          top: 0,
          left: target,
          behavior: 'instant',
        });
      } else {
        counter = 0;
        setImageIndex(counter);
        const image = imagesRef.current[counter];
        const target = image?.offsetLeft;
        wrapperRef.current?.scroll({
          top: 0,
          left: target,
          behavior: 'instant',
        });
      }
    } else {
      counter = imageIndex - 1;
      if (counter > -1) {
        setImageIndex(counter);
        const image = imagesRef.current[counter];
        const target = image?.offsetLeft;

        wrapperRef.current?.scroll({
          top: 0,
          left: target,
          behavior: 'instant',
        });
      } else {
        counter = imagesRef.current.length - 1;
        setImageIndex(counter);
        const image = imagesRef.current[counter];
        const target = image?.offsetLeft;

        wrapperRef.current?.scroll({
          top: 0,
          left: target,
          behavior: 'instant',
        });
      }
    }
  };

  const imageSliderHandler = (id: number) => {
    setImageIndex(id);
    const image = imagesRef.current[id];
    const target = image?.offsetLeft;

    wrapperRef.current?.scroll({
      top: 0,
      left: target,
      behavior: 'instant',
    });
  };

  const sliderHandler = (direction: DIRECTION) => {
    const slider = imageSliderRef.current;
    if (direction === DIRECTION.RIGHT) {
      slider?.scroll({
        top: 0,
        left: slider.offsetLeft + slider.clientWidth,
        behavior: 'smooth',
      });
    } else {
      slider?.scroll({
        top: 0,
        left: slider.offsetLeft - slider.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const isScrollingHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    //clearTimeout(scrollTimer);

    setScrolling(true);
    const scrollTimer = setTimeout(() => {
      setScrolling(false);
    }, 700);
  };

  return (
    <section
      id='viewer'
      className='fixed w-screen h-screen flex flex-col justify-center items-center  bg-black inset-0 z-50'
    >
      {/* Close button */}
      <span
        id='close__btn'
        onClick={() => closeHandler()}
        className='absolute top-10 right-16 flex justify-center items-center w-12 h-12 p-2 bg-blue-400 rounded-full transition cursor-pointer hover:bg-blue-600 active:scale-110 select-none active:opacity-50'
      >
        <img src={closeIcon} className='w-8 h-8' />
      </span>
      {/* viewer */}
      <div className='w-3/4 h-0 grow bg-green-300 relative'>
        <div
          id='wrapper-viewer'
          ref={wrapperRef}
          className='w-full h-full flex justify-start items-center overflow-x-auto snap-x snap-mandatory snap-always'
        >
          {images.map((url) => {
            return (
              <div
                key={images.indexOf(url)}
                ref={(el) => (imagesRef.current[images.indexOf(url)] = el)}
                style={{
                  backgroundImage: `url("${url}")`,
                }}
                className='min-w-full h-full bg-white snap-center bg-center bg-cover bg-no-repeat'
              />
            );
          })}
        </div>
        {/* arrows */}
        <div className='absolute bottom-0 left-0 right-0 w-full h-32 flex justify-center items-center space-x-8'>
          <span
            id='arrow-left'
            onClick={() => imageHandler(DIRECTION.LEFT)}
            className='flex justify-center items-center w-12 h-12 p-2 bg-blue-400 rounded-full transition cursor-pointer hover:bg-blue-600 active:scale-110 select-none active:opacity-50'
          >
            <img src={arrowLeft} className='w-8 h-8' />
          </span>
          <span
            id='arrow-right'
            onClick={() => imageHandler(DIRECTION.RIGHT)}
            className='flex justify-center items-center w-12 h-12 p-2 bg-blue-400 rounded-full transition cursor-pointer hover:bg-blue-600 active:scale-110 select-none active:opacity-50'
          >
            <img src={arrowRight} className='w-8 h-8' />
          </span>
        </div>
      </div>
      {/* slider container*/}
      <div className='relative w-3/4 h-44'>
        {/* slider */}
        <div
          id='wrapper-viewer__slider'
          ref={imageSliderRef}
          onScroll={(e) => isScrollingHandler(e)}
          className={`w-full h-full bg-black p-4 flex justify-start items-center space-x-5 overflow-x-auto snap-x snap-mandatory snap-always`}
        >
          {images.map((url) => {
            let variable = images.indexOf(url);
            return (
              <div
                onClick={() => imageSliderHandler(images.indexOf(url))}
                style={{
                  backgroundImage: `url("${url}")`,
                }}
                className={`min-w-[16rem] h-full snap-center bg-center bg-cover bg-no-repeat transition-all cursor-pointer ${
                  scrolling ? '' : 'hover:scale-110'
                } ${variable === imageIndex ? 'scale-110' : ''}`}
              >
                <div
                  className={`w-full h-full bg-black bg-opacity-30 transition-all ${
                    scrolling ? '' : 'hover:bg-transparent'
                  } ${variable === imageIndex ? 'bg-transparent' : ''}`}
                />
              </div>
            );
          })}
        </div>
        {/* buttons */}
        <span
          id='arrow-left'
          onClick={() => sliderHandler(DIRECTION.LEFT)}
          className='absolute top-1/2 -translate-y-1/2 left-0 flex justify-center items-center w-12 h-12 p-2 bg-blue-400 rounded-full transition cursor-pointer hover:bg-blue-600 active:scale-110 select-none active:opacity-50'
        >
          <img src={arrowLeft} className='w-8 h-8' />
        </span>
        <span
          id='arrow-right'
          onClick={() => sliderHandler(DIRECTION.RIGHT)}
          className='absolute top-1/2 -translate-y-1/2 right-0 flex justify-center items-center w-12 h-12 p-2 bg-blue-400 rounded-full transition cursor-pointer hover:bg-blue-600 active:scale-110 select-none active:opacity-50'
        >
          <img src={arrowRight} className='w-8 h-8' />
        </span>
      </div>
    </section>
  );
};

export default ImageViewer;
