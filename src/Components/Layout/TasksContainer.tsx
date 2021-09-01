import React from 'react';
import './TasksContainer.scss';

const TasksContainer: React.FC = ({ children }) => {
  return <section className='tasks-container'>{children}</section>;
};

export default TasksContainer;
