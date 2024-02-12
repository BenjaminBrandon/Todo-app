import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = ({
  currentTaskBoard,
  completedTaskBoard,
  openModal,
}: {
  currentTaskBoard(): void;
  completedTaskBoard(): void;
  openModal(): void;
}) => {
  return (
    <div className={styles.navBar}>
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
        onClick={() => openModal()}
      >
        Add Task
      </button>
    </div>
  );
};

export default NavBar;
