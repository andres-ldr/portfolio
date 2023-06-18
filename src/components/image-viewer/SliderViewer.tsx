import React, { useEffect, useRef, useState } from 'react';

interface Limits {
  lmax: number;
  lmin: number;
}

enum DIRECTION {
  START,
  END,
  RIGHT,
  LEFT,
}

interface SliderProps {
  images: string[];
  indexImage: number;
  indexHandler: (index: number) => void;
}

const SliderViewer: React.FC<SliderProps> = ({
  images,
  indexImage,
  indexHandler,
}) => {
  const imagesSliderRef = useRef<HTMLDivElement[] | null[]>([]);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scrolling, setScrolling] = useState(false);
  const [nMaxImg, setNMaxImg] = useState(0);
  const [limitControl, setLimitControl] = useState<Limits>({
    lmin: 0,
    lmax: nMaxImg,
  });

  let scrollTimer = setTimeout(() => {}, 700);

  useEffect(() => {
    imagesSliderRef.current = imagesSliderRef.current.slice(0, images.length);
    const calcNumMaxOfImgInSlider = () => {
      if (sliderRef.current && imagesSliderRef.current[0]) {
        const maxImages = Math.floor(
          sliderRef.current.clientWidth / imagesSliderRef.current[0].clientWidth
        );
        setNMaxImg(maxImages);
        if (indexImage > 0) {
          let newMax;
          if (indexImage % maxImages === 0) {
            newMax = Math.ceil(indexImage / maxImages + 0.5) * maxImages;
          } else {
            newMax = Math.ceil(indexImage / maxImages) * maxImages;
          }

          let newMin = newMax - maxImages;
          setLimitControl({ lmax: newMax, lmin: newMin });
          scroll(findImage(newMin));
        } else {
          setLimitControl({ lmax: maxImages, lmin: 0 });
          scroll(findImage(0));
        }
      }
    };

    calcNumMaxOfImgInSlider();
  }, [images, indexImage]);

  const isScrollingHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    clearTimeout(scrollTimer);

    setScrolling(true);
    scrollTimer = setTimeout(() => {
      setScrolling(false);
    }, 700);
  };

  const sliderHandler = (direction: DIRECTION) => {
    if (direction === DIRECTION.RIGHT) {
      let newMax = limitControl.lmax + nMaxImg;
      let newMin = newMax - nMaxImg;
      if (newMin < images.length) {
        setLimitControl({ lmax: newMax, lmin: newMin });
        scroll(findImage(newMin));
      } else {
        newMin = 0;
        newMax = nMaxImg;
        setLimitControl({ lmax: newMax, lmin: newMin });
        scroll(findImage(0));
      }
    } else if (direction === DIRECTION.LEFT) {
      let newMax = limitControl.lmax - nMaxImg;
      let newMin = newMax - nMaxImg;
      if (newMax !== 0) {
        setLimitControl({ lmax: newMax, lmin: newMin });
        scroll(findImage(newMin));
      } else {
        newMax = Math.ceil((images.length - 1) / nMaxImg) * nMaxImg;
        newMin = newMax - nMaxImg;
        setLimitControl({ lmax: newMax, lmin: newMin });
        scroll(findImage(newMin));
      }
    }
  };

  const findImage = (index: number): number => {
    let target;
    const image = imagesSliderRef.current[index];
    if (image) {
      return (target = image?.offsetLeft);
    }
    return 0;
  };

  const scroll = (target: number) => {
    sliderRef.current?.scroll({
      top: 0,
      left: target,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative w-3/4 h-44 max-lg:hidden'>
      {/* slider */}
      <div
        id='wrapper-viewer__slider'
        ref={sliderRef}
        onScroll={(e) => isScrollingHandler(e)}
        className={`wrapper-slider`}
      >
        {/* MINI Image */}
        {images.map((url) => {
          let variable: number = images.indexOf(url);

          return (
            <div
              ref={(el) => (imagesSliderRef.current[images.indexOf(url)] = el)}
              onClick={() => indexHandler(images.indexOf(url))}
              style={{
                backgroundImage: `url("${url}")`,
              }}
              className={`wrapper-slider-image ${
                scrolling ? '' : 'hover:scale-110'
              } ${variable === indexImage ? 'scale-110' : ''}`}
            >
              <div
                className={`wrapper-slider-cover ${
                  scrolling ? '' : 'hover:bg-transparent'
                } ${variable === indexImage ? 'bg-transparent' : 'bg-black'}`}
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'>
          <path d='M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z' />
        </svg>
      </span>
      <span
        id='arrow-right'
        onClick={() => sliderHandler(DIRECTION.RIGHT)}
        className='wrapper-slider-arrow right-0'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 96 960 960'>
          <path d='m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z' />
        </svg>
      </span>
    </div>
  );
};

export default SliderViewer;
