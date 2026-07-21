import { FC, SyntheticEvent } from 'react';
import EditButton from '@/components/EditButton';
import EditTitleForm from '@/components/EditTitleForm';
import { Props } from '@/features/task/types';
import { useDragCard } from '@/features/task/useDragCard';
import useMenu from '@/hooks/useMenu';
import { cn } from '@/lib/utils';

const Task: FC<Props> = ({ card }) => {
  const { title, id, columnId } = card;
  const { isDragging, drag } = useDragCard(columnId, id);
  const { isVisible, handleMenuClose, handleMenuOpen } = useMenu();
  const {
    handleMenuOpen: handleModalOpen,
    handleMenuClose: handleModalClose,
    isVisible: isModalVisible,
  } = useMenu();

  const handleOpenEdit = (event: SyntheticEvent) => {
    event.stopPropagation();
    handleMenuOpen();
  };

  const handleOpenModal = () => {
    if (!isVisible) {
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
          <div className="group flex justify-between items-center shadow px-4 py-1.5 rounded-lg my-2 bg-white cursor-pointer hover:bg-gray-100 transition">
            {!isVisible ? (
              <div className="flex items-center justify-between w-full">
                title
                <EditButton handleOpenEdit={handleOpenEdit} />
              </div>
            ) : (
              <EditTitleForm title={title} handleMenuClose={handleMenuClose} />
            )}
          </div>
        </div>,
      )}

      {/*<CardModal id={id} handleModalClose={handleModalClose} isModalVisible={isModalVisible} />*/}
    </>
  );
};

export default Task;
