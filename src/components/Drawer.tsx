import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface DrawerProps {
  btnHandle: () => void;
  isBtnClicked: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ isBtnClicked, btnHandle }) => {
  const [element, setElement] = useState<React.ReactPortal | null>(null);

  useEffect(() => {
    const el = ReactDOM.createPortal(
      <Fragment>
        <div
          onClick={() => btnHandle()}
          className={`drawer-bgr ${isBtnClicked ? 'drawer-bgr__open' : ''}`}
        ></div>
        <div className={`drawer-nav ${isBtnClicked ? 'drawer-nav__open' : ''}`}>
          <div className='drawer-nav-links'>
            <a
              href='#services'
              onClick={() => {
                btnHandle();
              }}
              className={`drawer-nav-links-item ${
                isBtnClicked ? 'drawer-nav-links-item__show' : ''
              }`}
            >
              Services
            </a>
            <a
              href='#work-experience'
              onClick={() => {
                btnHandle();
              }}
              className={`drawer-nav-links-item ${
                isBtnClicked ? 'drawer-nav-links-item__show' : ''
              }`}
            >
              Experience
            </a>
            <a
              href='#portfolio'
              onClick={() => {
                btnHandle();
              }}
              className={`drawer-nav-links-item ${
                isBtnClicked ? 'drawer-nav-links-item__show' : ''
              }`}
            >
              Portfolio
            </a>
            <a
              href='#contact'
              onClick={() => {
                btnHandle();
              }}
              className={`drawer-nav-links-item ${
                isBtnClicked ? 'drawer-nav-links-item__show' : ''
              }`}
            >
              Contact me
            </a>
          </div>
        </div>
      </Fragment>,
      document.body
    );
    setElement(el);
  }, [isBtnClicked]);

  return element;
};

export default Drawer;
