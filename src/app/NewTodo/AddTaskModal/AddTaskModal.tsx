import React, { useState } from 'react';
import styles from './AddTaskModal.module.scss';

const AddTaskModal = ({
  addNewTask,
  isOpen,
  close,
}: {
  isOpen: boolean;
  addNewTask(task: Task): void;
  close(): void;
}) => {
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  });

  const { title, description } = task;

  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setTask({
      ...task,
      title: event.target.value,
      id: event.target.value,
    });
  };

  const updateDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setTask({
      ...task,
      description: event.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.addTaskModal}>
      <dialog
        className={styles.addTaskModal}
        open
      >
        <h1>New Task</h1>
        <form
          method="dialog"
          className={styles.addTaskForm}
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={updateTitle}
          ></input>
          <br />
          <input
            type="text-area"
            placeholder="Description"
            value={description}
            onChange={updateDescription}
          ></input>
          <button
            onClick={() => {
              addNewTask(task);
              close();
            }}
          >
            Add Task
          </button>
          <button onClick={close}>Cancel</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddTaskModal;
