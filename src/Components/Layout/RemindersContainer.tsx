import { FC } from 'react';
import AddButton from '../UI/AddButton';
import ReminderList from '../RemindersList';
import styles from './RemindersContainer.module.scss';
import { useDispatch } from 'react-redux';
import { UiActionCreators } from '../../store/reducers/UI/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RemindersContainer: FC = () => {
  const dispatch = useDispatch();
  const remindersAmount = useTypedSelector(
    (state) => state.reminders.remindersAmount
  );

  const showFormHandler = () => {
    dispatch(UiActionCreators.setFormVisibility(true));
  };

  return (
    <section className={styles['tasks-container']}>
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
