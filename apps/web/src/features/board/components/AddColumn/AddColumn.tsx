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
      className="w-[272px] shrink-0 bg-white/30 hover:bg-white/40 text-white px-3"
      label="Add a column"
      handleMenuOpen={handleMenuOpen}
    />
  );
};

export default AddColumn;
