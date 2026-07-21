import { useDrop } from 'react-dnd';
import { DROP_TYPES } from '@/constants/dropTypes';
import { useOpen } from '@/hooks/useOpen';
import { useApi } from './useApi';

export const useColumn = (id: string) => {
  const { handleOpen, handleClose, open } = useOpen();
  const { updateColumnTitleMutation } = useApi();
  const [, drop] = useDrop({
    accept: DROP_TYPES.CARD,
    drop: () => ({ id }),
  });

  const handleUpdateColumnTitle = (newTitle: string) => {
    updateColumnTitleMutation({ id, title: newTitle });
  };

  return {
    handleOpen,
    handleClose,
    handleUpdateColumnTitle,
    open,
    drop,
  };
};
