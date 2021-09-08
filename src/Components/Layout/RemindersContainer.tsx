import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UiActionCreators } from '../../store/reducers/UI/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import cn from 'classnames';

import AddButton from '../UI/AddButton';
import ReminderList from '../RemindersList';

import styles from './RemindersContainer.module.scss';
import ToggleSwitch from '../UI/ToggleSwitch';
import { useActions } from '../../hooks/useAction';

const RemindersContainer: FC = () => {
  const remindersAmount = useTypedSelector(
    (state) => state.reminders.remindersAmount
  );

  const { switchTheme, setFormVisibility } = useActions();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      switchTheme(theme);
    }
  }, []);

  const theme = useTypedSelector((state) => state.uiReducer.theme);

  const showFormHandler = () => {
    setFormVisibility(true);
  };

  return (
    <section
      className={cn(styles['tasks-container'], styles[`${theme}-theme`])}
    >
      <ToggleSwitch name='themeSwitcher' />
      <AddButton
        className='add-btn add-task text-orange'
        title='Add Reminder'
        addHandler={showFormHandler}
      />
      <h1 className='text-light-blue'>
        Tasks List Header <span>{remindersAmount}</span>
      </h1>
      <ReminderList />
    </section>
  );
};

export default RemindersContainer;
