import { FC } from 'react';
import { useDrop } from 'react-dnd';
import AddItemForm from 'components/AddItemForm';
import CardPreview from 'components/CardPreview';
import EditButton from 'components/EditButton';
import EditTitleForm from 'components/EditTitleForm';
import { ITEMSTYPE } from 'constants/constants';
import { useItemsContext } from 'context/ItemsContext';
import useMenu from 'hooks/useMenu';
import { ColumnItem } from 'storage/models';


const Column: FC<ColumnItem> = ({ title, id }) => {
  const { handleMenuOpen, handleMenuClose, isVisible } = useMenu();
  const [, drop] = useDrop({
    accept: ITEMSTYPE.CARDS,
    drop: () => ({ id }),
  });
  const { cards } = useItemsContext();

  return (
    <div
      ref={drop}
      className="bg-red-50 rounded-2xl p-4 h-max w-64 shadow"
    >
      <div className="group flex justify-between items-center">
        <EditTitleForm
          isVisible={isVisible}
          item={{ title, id }}
          handleMenuClose={handleMenuClose}
          submitNotVisible
          type={ITEMSTYPE.COLUMNS}
        />

        <EditButton isVisible={isVisible} handleOpenEdit={handleMenuOpen} />
      </div>

      {cards && cards.map(card =>
        card.columnId === id &&
        <CardPreview card={card} key={card.id} />
      )}

      <AddItemForm
        label="Add card"
        placeholder="Enter title for this card"
        columnId={id}
      />
    </div>
  );
};

export default Column;
