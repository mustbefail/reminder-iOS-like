import { uniqueId } from 'lodash';
import { FC, FormEvent, useEffect, useRef } from 'react';
import { useActions } from '../../hooks/useAction';

import styles from './AddReminderForm.module.scss';

const AddReminderForm: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setFormVisibility, addReminder } = useActions();

  const addReminderHandler = (event: FormEvent) => {
    event.preventDefault();
    if (inputRef.current) {
      const text = inputRef.current.value;
      addReminder({
        text,
        id: uniqueId(),
        list: 'general',
        completed: false,
      });
      inputRef.current.value = '';
      setFormVisibility(false);
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
