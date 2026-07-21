import { FC } from 'react';
import AddItemButton from '@/components/AddItemButton/AddItemButton';
import AddColumnForm from '@/features/board/components/AddColumnForm/AddColumnForm';
import useMenu from '@/hooks/useMenu';

const AddColumn: FC = () => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();

  return isVisible ? (
    <AddColumnForm handleClose={handleMenuClose} />
  ) : (
    <AddItemButton
      className="w-68 shrink-0 bg-black/30 hover:bg-black/40 text-white px-3"
      label="Add a column"
      handleMenuOpen={handleMenuOpen}
    />
  );
};

export default AddColumn;
