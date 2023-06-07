import React, { Fragment, useState } from 'react';
import Drawer from './Drawer';

const MenuBtn = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const btnHandle = () => setIsBtnClicked(!isBtnClicked);

  return (
    <Fragment>
      <div
        onClick={btnHandle}
        className={`hamburguer ${
          isBtnClicked ? 'hamburguer__clicked' : 'hamburguer__no-clicked'
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* drawer */}
      <Drawer btnHandle={btnHandle} isBtnClicked={isBtnClicked} />
    </Fragment>
  );
};

export default MenuBtn;
