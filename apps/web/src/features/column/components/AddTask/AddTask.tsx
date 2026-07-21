import { FC } from 'react';
import AddItemButton from '@/components/AddItemButton/AddItemButton';
import AddTaskForm from '@/features/column/components/AddTaskForm/AddTaskForm';
import { useOpen } from '@/hooks/useOpen';
import { Props } from './types';

const AddTask: FC<Props> = ({ columnId }) => {
  const { handleOpen, handleClose, open } = useOpen();

  return open ? (
    <AddTaskForm columnId={columnId} handleClose={handleClose} />
  ) : (
    <AddItemButton label="Add a card" handleOpen={handleOpen} />
  );
};
export default AddTask;
