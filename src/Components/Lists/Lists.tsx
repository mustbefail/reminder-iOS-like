import { FC } from 'react';
import List from './List';
import { uniqueId } from 'lodash';

import { lists } from '../../fixtures/mockups';

import styles from './Lists.module.scss';

const Lists: FC = () => {
  return (
    <div className={styles.lists}>
      <p className={styles['lists-header']}>All Lists</p>
      <ul>
        {lists.map((list) => (
          <List key={uniqueId()} list={list} />
        ))}
      </ul>
    </div>
  );
};

export default Lists;
