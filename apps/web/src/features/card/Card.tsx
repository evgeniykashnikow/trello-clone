import { FC, SyntheticEvent } from 'react';
import EditButton from '@/components/EditButton/EditButton';
import EditTitleForm from '@/components/EditTitleForm/EditTitleForm';
import { useBoardContext } from '@/features/board/BoardContextUtils';
import CardModal from '@/features/card/components/CardModal/CardModal';
import { Props } from '@/features/card/types';
import { useDragCard } from '@/features/card/useDragCard';
import useMenu from '@/hooks/useMenu';
import { cn } from '@/lib/utils';

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
          <div className="group flex justify-between items-center shadow-sm hover:shadow-md px-3 py-2 rounded-lg mb-2 bg-white text-sm text-neutral-800 cursor-pointer transition">
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
