import React, { useState } from 'react';
import { TasksContainer, Sidebar } from './Components/Layout';
import SearchForm from './Components/SearchForm';

import './styles/global.scss';
import styles from './App.module.scss';
import '@fortawesome/fontawesome-free/js/all';
import CategoryList from './Components/RemindersCategories';
import Lists from './Components/LIsts';
import AddButton from './Components/UI/AddButton';
import ReminderList from './Components/RemindersList';

const App: React.FC = () => {
  const remindersAmount = 3;
  return (
    <div className={styles.app}>
      <Sidebar>
        <SearchForm />
        <CategoryList />
        <Lists />
        <AddButton
          className='add-btn add-list text-light-blue'
          title='Add List'
        />
      </Sidebar>
      <TasksContainer>
        <AddButton
          className='add-btn add-task text-orange'
          title='Add Reminder'
        />
        <h1 className='text-light-blue'>
          Tasks List Header <span>{remindersAmount}</span>
        </h1>
        <ReminderList />
      </TasksContainer>
    </div>
  );
};

export default App;
