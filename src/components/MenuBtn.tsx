import React, { Fragment, useState } from 'react';
import Drawer from './Drawer';

interface MenuBtnProps {
  closeNavbarHandler: () => void;
}

const MenuBtn: React.FC<MenuBtnProps> = ({ closeNavbarHandler }) => {
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
      <Drawer
        btnHandle={btnHandle}
        isBtnClicked={isBtnClicked}
        closeNavbarHandler={closeNavbarHandler}
      />
    </Fragment>
  );
};

export default MenuBtn;
