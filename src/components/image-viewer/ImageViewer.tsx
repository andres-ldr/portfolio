import React, { useEffect, useState } from 'react';
import Viewer from './Viewer';
import closeIcon from '../../../public/icons/close.svg';
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
        <img src={closeIcon} className='w-8 h-8' />
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
