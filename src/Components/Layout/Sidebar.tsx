import { FC, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import SearchForm from '../SearchForm';

import CategoryList from '../RemindersCategories';
import Lists from '../Lists';
import AddButton from '../UI/AddButton';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useAction';

const Sidebar: FC = () => {
  const { switchTheme } = useActions();
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      switchTheme(theme);
    }
  }, []);

  const theme = useTypedSelector((state) => state.uiReducer.theme);
  const cx = cn.bind(styles);

  const sidebarClassnames = cx({
    [styles.sidebar]: true,
    'bg-grey-1': theme === 'light',
    [`${theme}-theme`]: true,
  });

  return (
    <aside className={sidebarClassnames}>
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
