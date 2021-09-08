import { FC, useState, useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import styles from './ToggleSwitch.module.scss';

const ToggleSwitch: FC<{ name: string }> = ({ name }) => {
  const { switchTheme } = useActions();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const theme = isChecked ? 'dark' : 'light';
    switchTheme(theme);
  }, [isChecked]);

  const changeHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles['toggle-switch']}>
      <input
        type='checkbox'
        className={styles['toggle-switch-checkbox']}
        name={name}
        id={name}
        checked={isChecked}
        onChange={changeHandler}
      />
      <label className={styles['toggle-switch-label']} htmlFor={name}>
        <span
          className={styles['toggle-switch-inner']}
          data-dark='dark'
          data-light='light'
        />
        <span className={styles['toggle-switch-switch']} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
