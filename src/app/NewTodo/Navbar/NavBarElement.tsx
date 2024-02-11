import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import SvgMenuComponent from '../icons/verticalMenuDotSvg';

//Maybe make a pinned section

const NavBarElement = () => {
  const [show, setShow] = useState(true);

  const showMenu = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={() => showMenu()}>
        <SvgMenuComponent />
      </button>
      {show ? (
        <div className={styles.dropDown}>
          <a>edit</a>
          <a>delete</a>
        </div>
      ) : null}
    </div>
  );
};

export default NavBarElement;
