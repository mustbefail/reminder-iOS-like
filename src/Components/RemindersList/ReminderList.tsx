import { FC, useEffect } from 'react';
import Reminder from './Reminder';
import { uniqueId } from 'lodash';

import styles from './ReminderList.module.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import AddReminderForm from './AddReminderForm';
import { useDispatch } from 'react-redux';
import { ReminderActionCreators } from '../../store/reducers/reminders/action-creators';

const ReminderList: FC = () => {
  const reminders = useTypedSelector((state) => state.reminders.reminders);
  const dispatch = useDispatch();
  const isFormVisible = useTypedSelector(
    (state) => state.uiReducer.isFormVisible
  );

  useEffect(() => {
    dispatch(ReminderActionCreators.loadReminders());
  }, []);

  return (
    <>
      <ul className={styles['reminder-list']}>
        {reminders.map((reminder) => {
          return <Reminder key={uniqueId()} reminder={reminder} />;
        })}
      </ul>
      {isFormVisible && <AddReminderForm />}
    </>
  );
};

export default ReminderList;
