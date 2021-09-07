import { FC } from 'react';

const AddButton: FC<{ title: string; className: string }> = ({
  className,
  title,
}) => {
  return (
    <button className={className}>
      <i className='fas fa-plus'></i>
      {title}
    </button>
  );
};

export default AddButton;
