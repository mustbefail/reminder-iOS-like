import { FC } from 'react';
import { IReminder } from '../../models/types';
import cn from 'classnames';

import styles from './Reminder.module.scss';
import { useDispatch } from 'react-redux';
import { ReminderActionCreators } from '../../store/reducers/reminders/action-creators';

const Reminder: FC<{ reminder: IReminder }> = ({ reminder }) => {
  const { text, completed, id } = reminder;
  const dispatch = useDispatch();

  const iconClassnames = {
    fas: completed,
    'text-orange': completed,
    'fa-circle': true,
    far: !completed,
  };

  const completeReminderHandler = () => {
    dispatch(ReminderActionCreators.SetReminderComplete(!completed, id));
  };

  return (
    <li className={styles.reminder}>
      <span
        className={styles['reminder-icon']}
        onClick={completeReminderHandler}
      >
        <i className={cn(iconClassnames)}></i>
      </span>
      <span className={styles['reminder-text']}>{text}</span>
    </li>
  );
};

export default Reminder;
