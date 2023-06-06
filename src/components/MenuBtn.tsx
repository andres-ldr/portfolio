import React, { Fragment, useState } from 'react';

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
      <div
        onClick={btnHandle}
        className={`drawer-bgr ${isBtnClicked ? 'drawer-bgr__open' : ''}`}
      ></div>
      <div className={`drawer-nav ${isBtnClicked ? 'drawer-nav__open' : ''}`}>
        <div className='drawer-nav-links'>
          <a
            href='#about-me'
            onClick={btnHandle}
            className={`drawer-nav-links-item ${
              isBtnClicked ? 'drawer-nav-links-item__show' : ''
            }`}
          >
            About
          </a>
          <a
            href='#skills'
            onClick={btnHandle}
            className={`drawer-nav-links-item ${
              isBtnClicked ? 'drawer-nav-links-item__show' : ''
            }`}
          >
            Skillset
          </a>
          <a
            href='#work-experience'
            onClick={btnHandle}
            className={`drawer-nav-links-item ${
              isBtnClicked ? 'drawer-nav-links-item__show' : ''
            }`}
          >
            Experience
          </a>
          <a
            href='#portfolio'
            onClick={btnHandle}
            className={`drawer-nav-links-item ${
              isBtnClicked ? 'drawer-nav-links-item__show' : ''
            }`}
          >
            Portfolio
          </a>
          <a
            href='#contact-me'
            onClick={btnHandle}
            className={`drawer-nav-links-item ${
              isBtnClicked ? 'drawer-nav-links-item__show' : ''
            }`}
          >
            Contact me
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuBtn;
