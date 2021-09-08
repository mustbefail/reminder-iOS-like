import { FC } from 'react';
import { IReminder } from '../../models/types';
import cn from 'classnames';

import styles from './Reminder.module.scss';
import { useActions } from '../../hooks/useAction';

const Reminder: FC<{ reminder: IReminder }> = ({ reminder }) => {
  const { SetReminderComplete } = useActions();
  const { text, completed, id } = reminder;

  const iconClassnames = {
    fas: completed,
    'text-orange': completed,
    'fa-circle': true,
    far: !completed,
  };

  const completeReminderHandler = () => {
    SetReminderComplete(!completed, id);
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
