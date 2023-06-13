import React, { Fragment, useEffect, useRef, useState } from 'react';
import CardProjContent from '../CardProjectContent';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ItemGridProps {
  type: number;
  total_items: number;
  data: any;
  visibilityHandler: (id?: number) => void;
}

const ItemGrid: React.FC<ItemGridProps> = ({
  type,
  data,
  total_items,
  visibilityHandler,
}) => {
  const [n, setN] = useState(type);
  const [item, isVisible] = useIntersectionObserver({
    root: null,
    rootMarging: '0px',
    threshold: 0.3,
  });

  const pickItemType = () => {
    switch (total_items) {
      case 5:
        switch (n) {
          case 0:
            return (
              <div
                ref={item}
                key={data.id}
                style={{ backgroundImage: `url("${data.images[0]}")` }}
                className={`${
                  isVisible
                    ? 'card-grid col-span-2 row-span-3 max-lg:col-span-1 max-lg:row-span-1'
                    : 'opacity-0'
                } `}
              >
                <CardProjContent
                  id={data.id}
                  name={data.name}
                  stack={data.stack}
                />
              </div>
            );
          case 1:
            return (
              <div
                ref={item}
                key={data.id}
                style={{ backgroundImage: `url("${data.images[0]}")` }}
                className={`${
                  isVisible
                    ? 'card-grid col-span-2 row-span-2 max-lg:col-span-1 max-lg:row-span-1'
                    : 'opacity-0'
                } `}
              >
                <CardProjContent
                  id={data.id}
                  name={data.name}
                  stack={data.stack}
                />
              </div>
            );
          case 2:
            return (
              <div
                ref={item}
                key={data.id}
                style={{ backgroundImage: `url("${data.images[0]}")` }}
                className={`${
                  isVisible
                    ? 'card-grid col-span-2 row-span-2 col-start-3 row-start-1 max-lg:col-span-1 max-lg:row-span-1'
                    : 'opacity-0'
                }  `}
              >
                <CardProjContent
                  id={data.id}
                  name={data.name}
                  stack={data.stack}
                />
              </div>
            );
          case 3:
            return (
              <div
                ref={item}
                key={data.id}
                style={{ backgroundImage: `url("${data.images[0]}")` }}
                className={`${
                  isVisible
                    ? 'card-grid col-span-2 row-span-3 col-start-3 row-start-3 max-lg:col-span-1 max-lg:row-span-1'
                    : 'opacity-0'
                }  `}
              >
                <CardProjContent
                  id={data.id}
                  name={data.name}
                  stack={data.stack}
                />
              </div>
            );
          default:
            return (
              <div
                ref={item}
                key={data.id}
                style={{ backgroundImage: `url("${data.images[0]}")` }}
                className={`${
                  isVisible
                    ? 'card-grid col-span-2 row-span-5 col-start-5 row-start-1 max-lg:col-span-1 max-lg:row-span-1'
                    : 'opacity-0'
                }  `}
              >
                <CardProjContent
                  id={data.id}
                  name={data.name}
                  stack={data.stack}
                />
              </div>
            );
        }
      case 6:
        switch (n) {
          case 0:
            return (
              <div
                ref={item}
                key={data}
                className={
                  isVisible ? `image-card col-span-4 row-span-3` : 'opacity-0'
                }
              >
                {/* image */}
                <div
                  key={data}
                  style={{
                    backgroundImage: `url("${data}")`,
                  }}
                  className={`image-card__image`}
                ></div>
                {/* cover */}
                <div className='image-card__cover'>
                  <span
                    onClick={() => visibilityHandler()}
                    className='image-card__cover__btn'
                  >
                    view
                  </span>
                </div>
              </div>
            );
          case 1:
            return (
              <div
                ref={item}
                key={data}
                className={
                  isVisible
                    ? `image-card  col-span-2 row-span-5 col-start-5`
                    : 'opacity-0'
                }
              >
                {/* image */}
                <div
                  key={data}
                  style={{
                    backgroundImage: `url("${data}")`,
                  }}
                  className={`image-card__image`}
                ></div>
                {/* cover */}
                <div className='image-card__cover'>
                  <span
                    onClick={() => visibilityHandler()}
                    className='image-card__cover__btn'
                  >
                    view
                  </span>
                </div>
              </div>
            );
          case 2:
            return (
              <div
                ref={item}
                key={data}
                className={
                  isVisible
                    ? `image-card col-span-2 row-span-5 col-start-7 `
                    : 'opacity-0'
                }
              >
                {/* image */}
                <div
                  key={data}
                  style={{
                    backgroundImage: `url("${data}")`,
                  }}
                  className={`image-card__image`}
                ></div>
                {/* cover */}
                <div className='image-card__cover'>
                  <span
                    onClick={() => visibilityHandler()}
                    className='image-card__cover__btn'
                  >
                    view
                  </span>
                </div>
              </div>
            );
          case 3:
            return (
              <div
                ref={item}
                key={data}
                className={
                  isVisible
                    ? `image-card col-span-2 row-span-5 row-start-4 `
                    : 'opacity-0'
                }
              >
                {/* image */}
                <div
                  key={data}
                  style={{
                    backgroundImage: `url("${data}")`,
                  }}
                  className={`image-card__image`}
                ></div>
                {/* cover */}
                <div
                  onClick={() => visibilityHandler()}
                  className='image-card__cover'
                >
                  <span className='image-card__cover__btn'>view</span>
                </div>
              </div>
            );
          case 4:
            return (
              <div
                ref={item}
                key={data}
                className={
                  isVisible
                    ? `image-card col-span-2 row-span-5 col-start-3 row-start-4`
                    : 'opacity-0'
                }
              >
                {/* image */}
                <div
                  key={data}
                  style={{
                    backgroundImage: `url("${data}")`,
                  }}
                  className={`image-card__image`}
                ></div>
                {/* cover */}
                <div
                  onClick={() => visibilityHandler()}
                  className='image-card__cover'
                >
                  <span className='image-card__cover__btn'>view</span>
                </div>
              </div>
            );
          default:
            return (
              <div
                ref={item}
                key={data}
                className={
                  isVisible
                    ? `image-card col-span-4 row-span-3 col-start-5 row-start-6`
                    : 'opacity-0'
                }
              >
                {/* image */}
                <div
                  key={data}
                  style={{
                    backgroundImage: `url("${data}")`,
                  }}
                  className={`image-card__image`}
                ></div>
                {/* cover */}
                <div
                  onClick={() => visibilityHandler()}
                  className='image-card__cover'
                >
                  <span className='image-card__cover__btn'>view</span>
                </div>
              </div>
            );
        }
      default:
        break;
    }
  };

  return <Fragment>{pickItemType()}</Fragment>;
};

export default ItemGrid;
