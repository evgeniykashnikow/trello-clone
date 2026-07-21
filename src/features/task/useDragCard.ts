import { useDrag } from 'react-dnd';
import { DROP_TYPES } from '@/constants/dropTypes';
import { useBoard } from '@/features/board/useBoard';
import { DropResult } from '@/features/task/types';

export const useDragCard = (columnId: string, id: string) => {
  const { moveCard } = useBoard();

  const [{ isDragging }, drag] = useDrag({
    item: { id },
    type: DROP_TYPES.CARD,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (dropResult && dropResult.id !== columnId) {
        moveCard(columnId, dropResult.id, id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return { drag, isDragging };
};
