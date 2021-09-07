import React from 'react';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import SearchForm from '../SearchForm';

import CategoryList from '../RemindersCategories';
import Lists from '../LIsts';
import AddButton from '../UI/AddButton';

const Sidebar: React.FC = () => {
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
      <SearchForm />
      <CategoryList />
      <Lists />
      <AddButton
        className='add-btn add-list text-light-blue'
        title='Add List'
      />
    </aside>
  );
};

export default Sidebar;
