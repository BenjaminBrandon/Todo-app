import React from 'react';
import styles from './NavBar.module.scss';
//Maybe make a pinned section
const NavBarElement = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a>Edit</a>
        </li>
        <li>
          <a>Delete</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarElement;
