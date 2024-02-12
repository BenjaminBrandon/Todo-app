import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = ({}) => {
  return (
    <div className="navBar">
      <button
        className={styles.button}
        onClick={() => {
          currentTaskBoard();
        }}
      >
        Current Tasks
      </button>
      <button
        className={styles.button}
        onClick={() => {
          completedTaskBoard();
        }}
      >
        Completed Tasks
      </button>
      <button
        className={styles.button}
        onClick={() => setIsModalOpen(true)}
      >
        Add Task
      </button>
    </div>
  );
};

export default NavBar;
