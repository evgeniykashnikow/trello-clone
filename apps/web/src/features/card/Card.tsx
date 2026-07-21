import { FC, SyntheticEvent } from 'react';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import CardModal from '@/features/card/components/CardModal/CardModal';
import { Props } from '@/features/card/types';
import { useDragCard } from '@/features/card/useDragCard';
import EditButton from '@/shared/components/EditButton/EditButton';
import EditTitleForm from '@/shared/components/EditTitleForm/EditTitleForm';
import useMenu from '@/shared/hooks/useMenu';
import { cn } from '@/shared/lib/utils';

const Card: FC<Props> = ({ card }) => {
  const { title, id, columnId } = card;
  const { isDragging, drag } = useDragCard(columnId, id);
  const { isVisible, handleMenuClose, handleMenuOpen } = useMenu();
  const {
    handleMenuOpen: handleModalOpen,
    handleMenuClose: handleModalClose,
    isVisible: isModalVisible,
  } = useMenu();
  const { updateCardTitle } = useBoardContext();

  const handleOpenEdit = (event: SyntheticEvent) => {
    event.stopPropagation();
    handleMenuOpen();
  };

  const handleUpdateCardTitle = (newTitle: string) => {
    updateCardTitle(id, newTitle);
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
                {title}
                <EditButton handleOpenEdit={handleOpenEdit} />
              </div>
            ) : (
              <EditTitleForm
                title={title}
                handleMenuClose={handleMenuClose}
                onSave={handleUpdateCardTitle}
              />
            )}
          </div>
        </div>,
      )}

      <CardModal card={card} handleModalClose={handleModalClose} isModalVisible={isModalVisible} />
    </>
  );
};

export default Card;
