import { useDrag } from 'react-dnd';
import { DROP_TYPES } from '@/constants/dropTypes';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import { DropResult } from '@/features/card/types';

export const useDragCard = (columnId: string, id: string) => {
  const { moveCard } = useBoardContext();

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
