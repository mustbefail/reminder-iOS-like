import { FC } from 'react';

const AddButton: FC<{
  title: string;
  className: string;
  addHandler?: () => void;
}> = ({ className, title, addHandler }) => {
  return (
    <button className={className} onClick={addHandler}>
      <i className='fas fa-plus'></i>
      {title}
    </button>
  );
};

export default AddButton;
