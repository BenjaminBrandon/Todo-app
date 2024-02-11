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
    <div className={styles.header}>
      <button className={styles.dropDownBtn} onClick={() => showMenu()}>
        <SvgMenuComponent />
      </button>
      {show ? (
        <div className={styles.dropDown}>
          <a className={styles.dropDownElement}>edit</a>
          <a className={styles.dropDownElement}>delete</a>
        </div>
      ) : null}
    </div>
  );
};

export default NavBarElement;
