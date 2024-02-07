import React from 'react';

const TaskCardNavbarItem = props => {
  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
      >
        {props.icon}
      </a>
    </li>
  );
};

export default TaskCardNavbarItem;
