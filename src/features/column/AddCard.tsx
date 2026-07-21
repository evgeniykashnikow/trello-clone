import { FC } from 'react';
import AddItemButton from '@/components/AddItemButton';
import AddCardForm from '@/features/column/components/AddCardForm';
import useMenu from '@/hooks/useMenu';

type Props = {
  columnId: string;
};

const AddCard: FC<Props> = ({ columnId }) => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();

  return isVisible ? (
    <AddCardForm columnId={columnId} handleClose={handleMenuClose} />
  ) : (
    <AddItemButton label="Add a card" handleMenuOpen={handleMenuOpen} />
  );
};
export default AddCard;
