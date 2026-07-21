import { FC } from 'react';
import AddItemButton from '@/components/AddItemButton';
import AddColumnForm from '@/features/board/components/AddColumnForm';
import useMenu from '@/hooks/useMenu';

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
