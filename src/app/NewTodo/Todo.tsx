'use client';
import sampleTasks from './SampleData/sampletask';
import sampleCompletedTasks from './SampleData/samplecompletedtask';
import React, { useState } from 'react';
import TaskBoard from './CurrentTaskBoard';
import '../stylesheets/index.scss';
import AddTaskModal from './AddTaskModal';
import styles from '../stylesheets/button.module.scss';

//how to pass down setState function

const ToDo = () => {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [completedTasks, setCompletedTasks] =
    useState<Task[]>(sampleCompletedTasks);
  const [showCurrentTask, setShowCurrentTask] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSetCompletedTask = (completedTask: Task) => {
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const currentTaskBoard = () => {
    setShowCurrentTask(true);
  };

  const completedTaskBoard = () => {
    setShowCurrentTask(false);
  };

  return (
    <div className="mainBody">
      <div className="navBar">
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
          onClick={() => setIsModalOpen(true)}
        >
          Add Task
        </button>
      </div>
      <AddTaskModal
        addNewTask={addNewTask}
        isOpen={isModalOpen}
        close={closeModal}
      />

      <div className="board">
        {showCurrentTask ? (
          <TaskBoard tasks={tasks} />
        ) : (
          <TaskBoard tasks={completedTasks} />
          // <CompletedTaskBoard completedTasks={completedTasks} />
        )}
      </div>
    </div>
  );
};

export default ToDo;
