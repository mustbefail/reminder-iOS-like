import React from 'react';
import './Sidebar.scss';

const Sidebar: React.FC = ({ children }) => {
  return <aside className='sidebar'>{children}</aside>;
};

export default Sidebar;
