import { FC, SyntheticEvent } from 'react';
import CloseButton from '@/components/CloseButton/CloseButton';
import TaskDescription from '@/features/task/components/TaskDescription/TaskDescription';
import { useBoardQuery } from '@/hooks/api/queries/useBoardQuery';
import { Props } from './types';

const TaskModal: FC<Props> = ({ task, modalOpen, handleModalClose }) => {
  const { board } = useBoardQuery();
  const column = board?.columns.find((col) => col.id === task.columnId);

  const handlePreventClose = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  if (!modalOpen) {
    return null;
  }

  return (
    <div onClick={handleModalClose} className="absolute inset-0 bg-gray-900/50 w-screen h-screen">
      <div
        onClick={handlePreventClose}
        className="absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white rounded-xl w-[60%] h-[80%] text-black overflow-y-auto"
      >
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl">{task.title}</h1>
            <p>
              in list <span className="font-bold">{column?.title}</span>
            </p>
          </div>

          <CloseButton reset={false} handleClose={handleModalClose} />
        </div>

        <TaskDescription task={task} />
      </div>
    </div>
  );
};

export default TaskModal;
