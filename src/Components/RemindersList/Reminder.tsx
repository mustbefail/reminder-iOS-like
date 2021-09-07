import { FC } from 'react';
import { IReminder } from '../../types/types';

const Reminder: FC<{ reminder: IReminder }> = ({ reminder }) => {
  const { reminderText } = reminder;
  return (
    <li>
      <i className='far fa-circle'></i>
      <span>{reminderText}</span>
    </li>
  );
};

export default Reminder;
