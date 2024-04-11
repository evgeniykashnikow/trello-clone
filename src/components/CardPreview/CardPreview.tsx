import { FC, SyntheticEvent } from 'react';
import { useDrag } from 'react-dnd';
import CardModal from 'components/CardModal';
import EditButton from 'components/EditButton';
import EditTitleForm from 'components/EditTitleForm';
import { ITEMSTYPE } from 'constants/constants';
import { useItemsContext } from 'context/ItemsContext';
import { useItems } from 'hooks/useItems';
import useMenu from 'hooks/useMenu';
import { storage } from 'storage/storage';
import { DropResult, Props } from './types';


const CardPreview: FC<Props> = ({ card }) => {
  const { title, id, columnId } = card;
  const { setStorageItems } = storage();
  const { updateItemByID } = useItems()
  const { cards } = useItemsContext()

  const [{ isDragging }, drag] = useDrag({
    item: { title, id },
    type: ITEMSTYPE.CARDS,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (dropResult && dropResult.id !== columnId) {
        updateItemByID(ITEMSTYPE.CARDS, id, { ...item, columnId: dropResult.id } );
        setStorageItems(ITEMSTYPE.CARDS, cards)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });
  const { isVisible, handleMenuClose, handleMenuOpen } = useMenu();
  const {
    handleMenuOpen: handleModalOpen,
    handleMenuClose: handleModalClose,
    isVisible: isModalVisible
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
      <div ref={drag} style={{ opacity: isDragging ? .5 : 1 }} onClick={handleOpenModal}>
        <div
          className="group flex justify-between items-center shadow px-4 py-1.5 rounded-lg my-2 bg-white cursor-pointer hover:bg-gray-100 transition"
        >

          <EditTitleForm
            isVisible={isVisible}
            handleMenuClose={handleMenuClose}
            item={{ title, id, columnId }}
            type={ITEMSTYPE.CARDS}
          />

          <EditButton isVisible={isVisible} handleOpenEdit={handleOpenEdit} />
        </div>
      </div>

      <CardModal id={id} handleModalClose={handleModalClose} isModalVisible={isModalVisible} />
    </>
  );
};

export default CardPreview;
