import { FC } from 'react';
import { IList } from '../../types/types';
import cn from 'classnames';

import styles from './List.module.scss';

const List: FC<{ list: IList }> = ({ list }) => {
  const { name, amount, iconColor, iconName } = list;
  return (
    <li>
      <span className={cn('icon', `bg-${iconColor}`)}>
        <i className={iconName}></i>
      </span>
      <p>{name}</p>
      <span className={styles['list-tasks-count']}>
        <strong>{amount}</strong>
      </span>
    </li>
  );
};

export default List;
