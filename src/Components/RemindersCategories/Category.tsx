import { FC } from 'react';

import { ICategory } from '../../types/types';

import styles from './Category.module.scss';

const Category: FC<{ category: ICategory }> = ({ category }) => {
  const { name, amount, iconColor, iconName } = category;
  const isOverText = name.length > 12;

  return (
    <div className={`${styles['category']} ${isOverText ? 'col-2' : ''}`}>
      <div className={styles['header']}>
        <span className={`icon bg-${iconColor}`}>
          <i className={iconName}></i>
        </span>
        <span className={styles['category-reminders-count']}>
          <strong>{amount}</strong>
        </span>
      </div>
      <div className={styles['category-title']}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Category;
