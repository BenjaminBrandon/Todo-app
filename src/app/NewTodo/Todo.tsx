'use client';
import sampleTasks from './SampleData/sampletask';
import sampleCompletedTasks from './SampleData/samplecompletedtask';
import React, { useState } from 'react';
import TaskBoard from './CurrentTaskBoard';
import '../stylesheets/index.scss';
import AddTaskModal from './AddTaskModal';
//temp :
import TaskCardNavbar from './TaskCardNavbar';
import TaskCardNavbarItem from './TaskCardNavbarItem';
import downArrow from './icons/down-arrow-sketch.svg';
import Image from 'next/image';

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
      <TaskCardNavbar>
        <TaskCardNavbarItem
          icon={
            <Image
              src={downArrow}
              alt="im here"
              style={{ height: '20px', width: '20px' }}
            />
          }
        />
      </TaskCardNavbar>
      {/* <div className="navBar">
        <button
          onClick={() => {
            currentTaskBoard();
          }}
        >
          Current Tasks
        </button>
        <button
          onClick={() => {
            completedTaskBoard();
          }}
        >
          Completed Tasks
        </button>
        <button onClick={() => setIsModalOpen(true)}>Add Task</button>
      </div> */}
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
