import React, { useState } from 'react';
import Viewer from './Viewer';
import SliderViewer from './SliderViewer';

interface IVProps {
  images: string[];
  index: number;
  closeHandler: () => void;
}

const ImageViewer: React.FC<IVProps> = ({ images, closeHandler, index }) => {
  const [imageIndex, setImageIndex] = useState(index);

  const imageIndexHandler = (index: number) => {
    setImageIndex(index);
  };

  return (
    <section id='viewer' className='image-viewer'>
      {/* Close button */}
      <span
        id='close__btn'
        onClick={() => closeHandler()}
        className='image-viewer__close__btn'
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960'>
          <path d='m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
        </svg>
      </span>

      <Viewer
        imageIndex={imageIndex}
        images={images}
        indexHandler={imageIndexHandler}
      />

      <SliderViewer
        images={images}
        indexImage={imageIndex}
        indexHandler={imageIndexHandler}
      />
    </section>
  );
};

export default ImageViewer;
