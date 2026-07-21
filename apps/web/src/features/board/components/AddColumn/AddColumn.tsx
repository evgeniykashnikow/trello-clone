import { FC } from 'react';
import AddColumnForm from '@/features/board/components/AddColumnForm/AddColumnForm';
import AddItemButton from '@/shared/components/AddItemButton/AddItemButton';
import useMenu from '@/shared/hooks/useMenu';

const AddColumn: FC = () => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();

  return isVisible ? (
    <AddColumnForm handleClose={handleMenuClose} />
  ) : (
    <AddItemButton
      className="bg-mauve-200 hover:bg-mauve-300"
      label="Add a column"
      handleMenuOpen={handleMenuOpen}
    />
  );
};

export default AddColumn;
