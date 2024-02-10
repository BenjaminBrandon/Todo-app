import React, { useState } from 'react';
import styles from '../stylesheets/TaskCardNavbar.module.scss';
import SvgComponent from './arrowSvg';

const TaskCardNavbar = (props: React.JSX.Element) => {
  return (
    <nav className={styles.taskCardNavbar}>
      <ul className={styles.ul}>{props.children}</ul>
    </nav>
  );
};

export default TaskCardNavbar;
