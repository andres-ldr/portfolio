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
    <section id='viewer' className='image-viewer'>
      {/* Close button */}
      <span
        id='close__btn'
        onClick={() => closeHandler()}
        className='image-viewer__close__btn'
      >
        <img src={closeIcon} className='w-8 h-8' />
      </span>
      {/* viewer */}
      <div className='w-3/4 h-0 grow relative'>
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
      {/* slider container*/}
      <div className='relative w-3/4 h-44'>
        {/* slider */}
        <div
          id='wrapper-viewer__slider'
          ref={sliderRef}
          onScroll={(e) => isScrollingHandler(e)}
          className={`wrapper-slider`}
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
                className={`wrapper-slider-image ${
                  scrolling ? '' : 'hover:scale-110'
                } ${variable === imageIndex ? 'scale-110' : ''}`}
              >
                <div
                  className={`wrapper-slider-cover ${
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
          className='wrapper-slider-arrow left-0'
        >
          <img src={arrowLeft} className='w-8 h-8' />
        </span>
        <span
          id='arrow-right'
          onClick={() => sliderHandler(DIRECTION.RIGHT)}
          className='wrapper-slider-arrow right-0'
        >
          <img src={arrowRight} className='w-8 h-8' />
        </span>
      </div>
    </section>
  );
};

export default ImageViewer;
