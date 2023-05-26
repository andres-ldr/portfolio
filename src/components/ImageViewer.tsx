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
  START,
  END,
}

const ImageViewer: React.FC<Images> = ({ images, closeHandler, index }) => {
  const imagesRef = useRef<HTMLDivElement[] | null[]>([]);
  const imagesSliderRef = useRef<HTMLDivElement[] | null[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [imageIndex, setImageIndex] = useState(index);
  const [scrolling, setScrolling] = useState(false);
  const [limitControl, setLimitControl] = useState<{
    nmax: number;
    lmax: number;
    lmin: number;
  }>({
    nmax: 0,
    lmin: 0,
    lmax: 0,
  });

  let scrollTimer = setTimeout(() => {}, 700);

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, images.length);
    imagesSliderRef.current = imagesSliderRef.current.slice(0, images.length);

    const scrollToImgSelected = () => {
      const image = imagesRef.current[index];
      const target = image?.offsetLeft;

      wrapperRef.current?.scroll({
        top: 0,
        left: target,
        behavior: 'instant',
      });
    };

    const calcNumMaxOfImgInSlider = () => {
      if (sliderRef.current && imagesSliderRef.current[0]) {
        const maxImages = Math.floor(
          sliderRef.current.clientWidth / imagesSliderRef.current[0].clientWidth
        );

        let initLimit: {
          nmax: number;
          lmax: number;
          lmin: number;
        } = {
          nmax: maxImages,
          lmin: 0,
          lmax: maxImages,
        };

        setLimitControl(initLimit);
      }
    };

    scrollToImgSelected();
    calcNumMaxOfImgInSlider();
  }, [images]);

  const imageHandler = (direction: DIRECTION) => {
    let counter;
    if (direction === DIRECTION.RIGHT) {
      counter = imageIndex + 1;
      setImageIndex(counter);
      if (counter < imagesRef.current.length) {
        const image = imagesRef.current[counter];
        const target = image?.offsetLeft;
        // calc limits
        if (counter > limitControl.lmax - 1) {
          let updateLimits: {
            nmax: number;
            lmax: number;
            lmin: number;
          } = {
            nmax: limitControl.nmax,
            lmax: limitControl.lmax + limitControl.nmax,
            lmin: limitControl.lmin + limitControl.nmax,
          };
          setLimitControl(updateLimits);
          sliderHandler(DIRECTION.RIGHT);
        }
        // -----
        wrapperRef.current?.scroll({
          top: 0,
          left: target,
          behavior: 'instant',
        });
      } else {
        counter = 0;
        // calc limits
        let updateLimits: {
          nmax: number;
          lmax: number;
          lmin: number;
        } = {
          nmax: limitControl.nmax,
          lmax: limitControl.nmax,
          lmin: 0,
        };
        setLimitControl(updateLimits);
        sliderHandler(DIRECTION.START);

        // -----

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
        // -----------------
        if (counter < limitControl.lmin) {
          let updateLimits: {
            nmax: number;
            lmax: number;
            lmin: number;
          } = {
            nmax: limitControl.nmax,
            lmax: limitControl.lmax - limitControl.nmax,
            lmin: limitControl.lmin - limitControl.nmax,
          };
          setLimitControl(updateLimits);
          sliderHandler(DIRECTION.LEFT);
        }
        // ----------------
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
        //-----

        let updateLimits: {
          nmax: number;
          lmax: number;
          lmin: number;
        } = {
          nmax: limitControl.nmax,
          lmax: imagesSliderRef.current.length - 1,
          lmin: imagesSliderRef.current.length - limitControl.nmax,
        };

        setLimitControl(updateLimits);
        sliderHandler(DIRECTION.END);
        //-----

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
    const slider = sliderRef.current;
    if (slider) {
      if (direction === DIRECTION.RIGHT) {
        slider?.scroll({
          top: 0,
          left: slider.offsetLeft + slider.clientWidth,
          behavior: 'smooth',
        });
      } else if (direction === DIRECTION.LEFT) {
        slider?.scroll({
          top: 0,
          left: slider.offsetLeft - slider.clientWidth,
          behavior: 'smooth',
        });
      } else if (direction === DIRECTION.START) {
        slider?.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } else if (direction === DIRECTION.END) {
        slider?.scroll({
          top: 0,
          left: slider.clientWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const isScrollingHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    clearTimeout(scrollTimer);

    setScrolling(true);
    scrollTimer = setTimeout(() => {
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
          ref={sliderRef}
          onScroll={(e) => isScrollingHandler(e)}
          className={`w-full h-full bg-black p-4 flex justify-start items-center space-x-5 overflow-x-auto snap-x snap-mandatory snap-always`}
        >
          {/* MINI Image */}
          {images.map((url) => {
            let variable = images.indexOf(url);
            return (
              <div
                ref={(el) =>
                  (imagesSliderRef.current[images.indexOf(url)] = el)
                }
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
