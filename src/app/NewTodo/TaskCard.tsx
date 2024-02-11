import React from 'react';
import SvgMenuComponent from './icons/verticalMenuDotSvg';
import styles from '../stylesheets/TaskCardNavbar.module.scss';
import NavBarElement from './Navbar/NavBarElement';

const TaskCard = (task: Task) => {
  return (
    <div
      className="taskCard"
      id={task.id}
    >
      {/* <TaskCardNavbar>
        <TaskCardNavbarItem icon={<SvgComponent />} />
      </TaskCardNavbar> */}
      {/* <nav className={styles.taskCardNavbar}>
        <ul>
          <li>
            <SvgMenuComponent />
          </li>
          <li>delete</li>
        </ul>
      </nav> */}
      <NavBarElement />

      <div className="taskCardHeader">
        <h3 className="taskTitle">{task.title}</h3>
      </div>

      <p className="taskDescription">{task.description}</p>
      <button className="taskCompleteButton">Complete</button>
    </div>
  );
};

export default TaskCard;
