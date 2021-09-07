import { FC } from 'react';
import { reminders } from '../../fixtures/mockups';
import Reminder from './Reminder';
import { uniqueId } from 'lodash';

const ReminderList: FC = () => {
  return (
    <ul>
      {reminders.map((reminder) => (
        <Reminder key={uniqueId()} reminder={reminder} />
      ))}
    </ul>
  );
};

export default ReminderList;
