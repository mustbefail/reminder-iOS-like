import { uniqueId } from 'lodash';
import { FC, FormEvent, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ReminderActionCreators } from '../../store/reducers/reminders/action-creators';
import { UiActionCreators } from '../../store/reducers/UI/action-creators';

import styles from './AddReminderForm.module.scss';

const AddReminderForm: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const addReminderHandler = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      const text = inputRef.current.value;
      dispatch(
        ReminderActionCreators.addReminder({
          text,
          id: uniqueId(),
          list: 'general',
          completed: false,
        })
      );
      inputRef.current.value = '';
      dispatch(UiActionCreators.setFormVisibility(false));
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <form className={styles['add-reminder']} onSubmit={addReminderHandler}>
      <label>
        <i className='fas fa-plus'></i>
      </label>
      <input type='text' ref={inputRef} />
    </form>
  );
};

export default AddReminderForm;
