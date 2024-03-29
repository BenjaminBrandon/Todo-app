import React from 'react';
import TaskCard from '../TaskCard/TaskCard';

const TaskBoard = ({ tasks }: { tasks: Task[] }) => {
  return tasks.map((task: Task) => (
    <TaskCard
      {...task}
      key={task.title}
    />
  ));
};

export default TaskBoard;
