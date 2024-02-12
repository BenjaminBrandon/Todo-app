'use client';
import sampleTasks from '../SampleData/sampletask';
import sampleCompletedTasks from '../SampleData/samplecompletedtask';
import React, { useState } from 'react';
import TaskBoard from '../TaskBoard/TaskBoard';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import styles from './Todo.module.scss';
import NavBar from '../NavBar/Navbar';

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
  const openModal = () => setIsModalOpen(true);

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
    <div className={styles.mainBody}>
      <NavBar
        currentTaskBoard={currentTaskBoard}
        completedTaskBoard={completedTaskBoard}
        openModal={openModal}
      />
      <AddTaskModal
        addNewTask={addNewTask}
        isOpen={isModalOpen}
        close={closeModal}
      />

      <div className={styles.taskBoard}>
        {showCurrentTask ? (
          <TaskBoard tasks={tasks} />
        ) : (
          <TaskBoard tasks={completedTasks} />
        )}
      </div>
    </div>
  );
};

export default ToDo;
