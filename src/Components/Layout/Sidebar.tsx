import React from 'react';
import styles from './Sidebar.module.scss';
import cn from 'classnames';

const Sidebar: React.FC = ({ children }) => {
  return (
    <aside className={cn(styles.sidebar, 'bg-grey-1')}>
      <div className={styles['control-container']}>
        <button className={cn(styles['control-btn'], 'bg-light-red')}></button>
        <button
          className={cn(styles['control-btn'], 'bg-light-yellow')}
        ></button>
        <button
          className={cn(styles['control-btn'], 'bg-light-green')}
        ></button>
      </div>
      {children}
    </aside>
  );
};

export default Sidebar;
