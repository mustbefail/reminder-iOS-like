import { FC } from 'react';
import cn from 'classnames';

import styles from './SearchForm.module.scss';

const SearchForm: FC = () => {
  return (
    <form className={styles['search-form']}>
      <span className={cn(styles['search-icon'], 'text-grey-4')}>
        <i className='fas fa-search'></i>
      </span>
      <input
        type='text'
        placeholder='Search'
        className='bg-grey-2 text-grey-6'
      />
    </form>
  );
};

export default SearchForm;
