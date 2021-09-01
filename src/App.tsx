import React, { useState } from 'react';
import { TasksContainer, Sidebar } from './Components/Layout';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar>
        <div className='control-container'>
          <button className='control-btn bg-light-red'></button>
          <button className='control-btn bg-light-yellow'></button>
          <button className='control-btn bg-light-green'></button>
        </div>
        <form className='search-form'>
          <span className='search-icon'>
            <i className='fas fa-search'></i>
          </span>
          <input type='text' placeholder='Search' />
        </form>
        <div className='list-counts'>
          <div className='list'>
            <div className='header'>
              <span className='icon bg-orange'>
                <i className='far fa-clock'></i>
              </span>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </div>
            <div className='list-title'>
              <p>Title Text</p>
            </div>
          </div>
          <div className='list'>
            <div className='header'>
              <span className='icon bg-red'>
                <i className='fas fa-archive'></i>
              </span>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </div>
            <div className='list-title'>
              <p>Title Text</p>
            </div>
          </div>
          <div className='list col-1'>
            <div className='header'>
              <span className='icon bg-grey'>
                <i className='fas fa-flag'></i>
              </span>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </div>
            <div className='list-title'>
              <p>Title Text</p>
            </div>
          </div>
          <div className='list'>
            <div className='header'>
              <span className='icon bg-blue'>
                <i className='far fa-calendar-alt'></i>
              </span>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </div>
            <div className='list-title'>
              <p>Title Text</p>
            </div>
          </div>
          <div className='list col-2'>
            <div className='header'>
              <span className='icon bg-orange'>
                <i className='fas fa-fire-alt'></i>
              </span>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </div>
            <div className='list-title'>
              <p>Title Text</p>
            </div>
          </div>
        </div>
        <p className='lists-header'>All Lists</p>
        <div className='lists'>
          <ul>
            <li>
              <span className='icon bg-teal'>
                <i className='fas fa-book'></i>
              </span>
              <p>List Name</p>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </li>
            <li>
              <span className='icon bg-purple'>
                <i className='fab fa-free-code-camp'></i>
              </span>
              <p>List Name</p>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </li>
            <li>
              <span className='icon bg-cyan'>
                <i className='fas fa-users'></i>
              </span>
              <p>List Name</p>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </li>
            <li className='active'>
              <span className='icon bg-indigo'>
                <i className='fas fa-coffee'></i>
              </span>
              <p>List Name</p>
              <span className='list-tasks-count'>
                <strong>1</strong>
              </span>
            </li>
          </ul>
        </div>
        <button className='add-btn add-list'>
          <i className='fas fa-plus'></i>
          Add List
        </button>
      </Sidebar>
      <TasksContainer>
        <button className='add-btn add-task'>
          <i className='fas fa-plus'></i>
          Add Reminder
        </button>
        <h1>
          Tasks List Header <span>3</span>
        </h1>
        <ul>
          <li>
            <i className='far fa-circle'></i>
            <span>Choose next book</span>
          </li>
          <li>
            <i className='far fa-circle'></i>
            <span>Set up virtual meeting</span>
          </li>
          <li>
            <i className='far fa-circle'></i>
            <span>Decide on a theme for next year</span>
          </li>
          <li>
            <i className='fas fa-plus'></i>
            <input type='text' />
          </li>
        </ul>
      </TasksContainer>
    </div>
  );
};

export default App;
