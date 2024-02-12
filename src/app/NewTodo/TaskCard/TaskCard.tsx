import React from 'react';
import SvgMenuComponent from '../icons/verticalMenuDotSvg';
import styles from '../stylesheets/TaskCardNavbar.module.scss';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const TaskCard = (task: Task) => {
  return (
    <div
      className="taskCard"
      id={task.id}
    >
      <DropDownMenu />
      <div className="taskCardHeader">
        <h3 className="taskTitle">{task.title}</h3>
      </div>

      <p className="taskDescription">{task.description}</p>
      <button className="taskCompleteButton">Complete</button>
    </div>
  );
};

export default TaskCard;
