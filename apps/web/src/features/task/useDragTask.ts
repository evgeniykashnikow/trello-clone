import { useDrag } from 'react-dnd';
import { DROP_TYPES } from '@/constants/dropTypes';
import { DropResult } from '@/features/task/types';
import { useTask } from '@/features/task/useTask';

export const useDragTask = (columnId: string, id: string) => {
  const { moveTask } = useTask();

  const [{ isDragging }, drag] = useDrag({
    item: { id },
    type: DROP_TYPES.TASK,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (dropResult && dropResult.id !== columnId) {
        moveTask(dropResult.id, id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return { drag, isDragging };
};
