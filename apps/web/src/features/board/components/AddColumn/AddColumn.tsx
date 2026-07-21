import { FC } from 'react';
import AddItemButton from '@/components/AddItemButton/AddItemButton';
import AddColumnForm from '@/features/board/components/AddColumnForm/AddColumnForm';
import { useOpen } from '@/hooks/useOpen';

const AddColumn: FC = () => {
  const { handleOpen, handleClose, open } = useOpen();

  return open ? (
    <AddColumnForm handleClose={handleClose} />
  ) : (
    <AddItemButton
      className="w-68 shrink-0 bg-black/30 hover:bg-black/40 text-white px-3"
      label="Add a column"
      handleOpen={handleOpen}
    />
  );
};

export default AddColumn;
