import { FC, SyntheticEvent } from 'react';
import EditButton from '@/components/EditButton/EditButton';
import EditTitleForm from '@/components/EditTitleForm/EditTitleForm';
import TaskModal from '@/features/task/components/TaskModal/TaskModal';
import { Props } from '@/features/task/types';
import { useDragTask } from '@/features/task/useDragTask';
import { useTask } from '@/features/task/useTask';
import { useOpen } from '@/hooks/useOpen';
import { cn } from '@/lib/utils';

const Task: FC<Props> = ({ task }) => {
  const { title, id, columnId } = task;
  const { isDragging, drag } = useDragTask(columnId, id);
  const { open, handleClose, handleOpen } = useOpen();
  const {
    handleOpen: handleModalOpen,
    handleClose: handleModalClose,
    open: modalOpen,
  } = useOpen();
  const { updateTaskTitle } = useTask();

  const handleOpenEdit = (event: SyntheticEvent) => {
    event.stopPropagation();
    handleOpen();
  };

  const handleUpdateTaskTitle = (newTitle: string) => {
    updateTaskTitle(id, newTitle);
  };

  const handleOpenModal = () => {
    if (!open) {
      handleModalOpen();
    }
  };

  return (
    <>
      {drag(
        <div
          className={cn({
            'opacity-50': isDragging,
            'opacity-100': !isDragging,
          })}
          onClick={handleOpenModal}
        >
          <div className="group flex justify-between items-center shadow-sm hover:shadow-md px-3 py-2 rounded-lg mb-2 bg-white text-sm text-neutral-800 cursor-pointer transition">
            {!open ? (
              <div className="flex items-center justify-between w-full">
                {title}
                <EditButton handleOpenEdit={handleOpenEdit} />
              </div>
            ) : (
              <EditTitleForm
                title={title}
                handleClose={handleClose}
                onSave={handleUpdateTaskTitle}
              />
            )}
          </div>
        </div>,
      )}

      <TaskModal task={task} handleModalClose={handleModalClose} modalOpen={modalOpen} />
    </>
  );
};

export default Task;
