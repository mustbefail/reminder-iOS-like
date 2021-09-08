import { FC, useEffect } from 'react';
import Reminder from './Reminder';
import { uniqueId } from 'lodash';

import styles from './ReminderList.module.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import AddReminderForm from './AddReminderForm';
import { useActions } from '../../hooks/useAction';

const ReminderList: FC = () => {
  const { loadReminders } = useActions();
  const reminders = useTypedSelector((state) => state.reminders.reminders);
  const isFormVisible = useTypedSelector(
    (state) => state.uiReducer.isFormVisible
  );

  useEffect(() => {
    loadReminders();
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
