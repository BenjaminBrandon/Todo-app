import React from 'react';
import styles from './TaskCard.module.scss';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const TaskCard = (task: Task) => {
  return (
    <div
      className={styles.taskCard}
      id={task.id}
    >
      <DropDownMenu />
      <div className={styles.taskCardHeader}>
        <h3 className="taskTitle">{task.title}</h3>
      </div>

      <p className="taskDescription">{task.description}</p>
      <button className="taskCompleteButton">Complete</button>
    </div>
  );
};

export default TaskCard;
