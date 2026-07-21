import { FC } from 'react';
import AddCardForm from '@/features/column/components/AddCardForm/AddCardForm';
import AddItemButton from '@/shared/components/AddItemButton/AddItemButton';
import useMenu from '@/shared/hooks/useMenu';
import { Props } from './types';

const AddCard: FC<Props> = ({ columnId }) => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();

  return isVisible ? (
    <AddCardForm columnId={columnId} handleClose={handleMenuClose} />
  ) : (
    <AddItemButton label="Add a card" handleMenuOpen={handleMenuOpen} />
  );
};
export default AddCard;
