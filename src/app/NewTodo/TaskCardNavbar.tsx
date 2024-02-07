import React, { useState } from 'react';
import styles from '../stylesheets/TaskCardNavbar.module.scss';

const TaskCardNavbar = props => {
  return (
    <nav className={styles.taskCardNavbar}>
      <ul className={styles.taskCardNavbarnav}>{props.children}</ul>
    </nav>
  );
};

export default TaskCardNavbar;
