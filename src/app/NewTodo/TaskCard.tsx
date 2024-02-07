import React from 'react';
import Image from 'next/image';
import TaskCardNavbar from './TaskCardNavbar';
import TaskCardNavbarItem from './TaskCardNavbarItem';
import downArrow from './icons/down-arrow-sketch.svg';

const TaskCard = (task: Task) => {
  return (
    <div
      className="taskCard"
      id={task.id}
    >
      <TaskCardNavbar>
        <TaskCardNavbarItem
          icon={
            <Image
              src={downArrow}
              alt="im here"
            />
          }
        />
      </TaskCardNavbar>
      <div className="taskCardHeader">
        <h3 className="taskTitle">{task.title}</h3>
      </div>

      <p className="taskDescription">{task.description}</p>
      <button className="taskCompleteButton">Complete</button>
    </div>
  );
};

export default TaskCard;
