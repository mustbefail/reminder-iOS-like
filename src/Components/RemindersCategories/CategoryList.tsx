import { FC } from 'react';
import Category from './Category';
import { uniqueId } from 'lodash';

import { categories } from '../../fixtures/mockups';

import styles from './CategoryList.module.scss';

const CategoryList: FC = () => {
  return (
    <div className={styles['category-list']}>
      {categories.map((category) => (
        <Category key={uniqueId()} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
