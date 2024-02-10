import React from 'react';
import styles from '../stylesheets/TaskCardNavbar.module.scss';

const TaskCardNavbarItem = ({ icon }: React.JSX.Element) => {
  return (
    <li className={styles.iconButton}>
      <a
        href="#"
        className={styles.iconButton}
      >
        {icon}
      </a>
    </li>
  );
};

export default TaskCardNavbarItem;
