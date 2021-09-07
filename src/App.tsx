import { FC } from 'react';
import { RemindersContainer, Sidebar } from './Components/Layout';


import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <RemindersContainer />
    </div>
  );
};

export default App;
