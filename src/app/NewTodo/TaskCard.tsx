import React from 'react';
import Image from 'next/image';
import TaskCardNavbar from './TaskCardNavbar';
import TaskCardNavbarItem from './TaskCardNavbarItem';
import SvgComponent from './arrowSvg';
import styles from '../stylesheets/TaskCardNavbar.module.scss';

const TaskCard = (task: Task) => {
  return (
    <div
      className="taskCard"
      id={task.id}
    >
      {/* <TaskCardNavbar>
        <TaskCardNavbarItem icon={<SvgComponent />} />
      </TaskCardNavbar> */}
      <nav className={styles.taskCardNavbar}>
        <ul>
          <li>
            <SvgComponent />
          </li>
          <li>delete</li>
        </ul>
      </nav>
      <div className="taskCardHeader">
        <h3 className="taskTitle">{task.title}</h3>
      </div>

      <p className="taskDescription">{task.description}</p>
      <button className="taskCompleteButton">Complete</button>
    </div>
  );
};

export default TaskCard;
